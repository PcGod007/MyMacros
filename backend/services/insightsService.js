const mongoose = require('mongoose');
const DayLog = require('../models/DayLog');
const InsightsCache = require('../models/InsightsCache');

const CACHE_TTL_MINUTES = 60; // cache lives for 1 hour

/** Generic cache-or-compute wrapper */
async function getCachedOrCompute(userId, cacheKey, computeFn) {
    try {
        const cached = await InsightsCache.findOne({ userId, cacheKey });
        if (cached && cached.expiresAt > new Date()) return cached.payload;
    } catch (_) { /* cache miss is fine */ }

    const result = await computeFn();

    // Upsert — safe if two requests race
    try {
        await InsightsCache.updateOne(
            { userId, cacheKey },
            {
                $set: {
                    payload: result,
                    computedAt: new Date(),
                    expiresAt: new Date(Date.now() + CACHE_TTL_MINUTES * 60 * 1000)
                }
            },
            { upsert: true }
        );
    } catch (_) { /* non-fatal */ }

    return result;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalizeDate(d) {
    const out = new Date(d);
    out.setHours(0, 0, 0, 0);
    return out;
}

function addDays(d, n) {
    const out = new Date(d);
    out.setDate(out.getDate() + n);
    return out;
}

function subtractDays(d, n) { return addDays(d, -n); }

function totalCaloriesFromEntries(entries = []) {
    return entries.reduce((sum, e) => sum + (e.macros?.calories || 0), 0);
}

// ─── Summary ─────────────────────────────────────────────────────────────────

async function computeSummary(userId, rangeDays) {
    return getCachedOrCompute(userId, `summary:${rangeDays}d`, async () => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - rangeDays);
        startDate.setHours(0, 0, 0, 0);
        const startStr = startDate.toISOString().split('T')[0];

        // Pull raw DayLogs — flat entries[] model
        const logs = await DayLog.find({
            user: new mongoose.Types.ObjectId(userId),
            date: { $gte: startStr }
        }).lean();

        if (!logs.length) return emptyState(rangeDays);

        let daysLogged = 0, totalCal = 0, totalP = 0, totalC = 0, totalF = 0, totalFi = 0;
        const days = [];

        logs.forEach(log => {
            const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
            (log.entries || []).forEach(e => {
                totals.calories += e.macros?.calories || 0;
                totals.protein  += e.macros?.protein  || 0;
                totals.carbs    += e.macros?.carbs    || 0;
                totals.fat      += e.macros?.fat      || 0;
                totals.fiber    += e.macros?.fiber    || 0;
            });
            if (totals.calories > 0) {
                daysLogged++;
                totalCal += totals.calories;
                totalP   += totals.protein;
                totalC   += totals.carbs;
                totalF   += totals.fat;
                totalFi  += totals.fiber;
                days.push({ date: log.date, totals });
            }
        });

        if (daysLogged === 0) return emptyState(rangeDays);

        const highlights = {};
        if (days.length) {
            highlights.highestProteinDay = days.reduce((a, b) => a.totals.protein  > b.totals.protein  ? a : b);
            highlights.mostFiberDay      = days.reduce((a, b) => a.totals.fiber    > b.totals.fiber    ? a : b);
            highlights.highestCalorieDay = days.reduce((a, b) => a.totals.calories > b.totals.calories ? a : b);
        }

        return {
            rangeDays,
            daysLogged,
            adherenceRate: Math.round((daysLogged / rangeDays) * 100),
            averages: {
                calories: Math.round(totalCal / daysLogged),
                protein:  Math.round(totalP   / daysLogged),
                carbs:    Math.round(totalC   / daysLogged),
                fat:      Math.round(totalF   / daysLogged),
                fiber:    Math.round(totalFi  / daysLogged)
            },
            highlights
        };
    });
}

function emptyState(rangeDays) {
    return { rangeDays, daysLogged: 0, adherenceRate: 0, averages: {}, highlights: {} };
}

// ─── Streak ──────────────────────────────────────────────────────────────────

async function computeStreak(userId) {
    return getCachedOrCompute(userId, 'streak', async () => {
        const logs = await DayLog.find({ user: new mongoose.Types.ObjectId(userId) })
            .sort({ date: -1 })
            .limit(400)
            .lean();

        if (!logs.length) return { current: 0, longest: 0 };

        // Filter to only days that have at least 1 calorie
        const activeDates = logs
            .filter(l => totalCaloriesFromEntries(l.entries) > 0)
            .map(l => l.date)
            .sort()
            .reverse(); // newest first

        if (!activeDates.length) return { current: 0, longest: 0 };

        const today    = normalizeDate(new Date());
        const todayStr = today.toISOString().split('T')[0];
        const yestStr  = subtractDays(today, 1).toISOString().split('T')[0];

        // Current streak — walk back from today (or yesterday if today not logged)
        let current = 0;
        let cursor = activeDates.includes(todayStr) ? today : (activeDates.includes(yestStr) ? subtractDays(today, 1) : null);

        if (cursor) {
            for (const dateStr of activeDates) {
                const expected = cursor.toISOString().split('T')[0];
                if (dateStr === expected) {
                    current++;
                    cursor = subtractDays(cursor, 1);
                } else if (dateStr < expected) {
                    break;
                }
            }
        }

        // Longest streak — walk forward through sorted ascending dates
        const asc = [...activeDates].reverse();
        let longest = 0, running = 0;
        let prevDate = null;
        for (const dateStr of asc) {
            const d = normalizeDate(new Date(dateStr + 'T00:00:00'));
            if (!prevDate || d.getTime() === addDays(prevDate, 1).getTime()) {
                running++;
            } else {
                running = 1;
            }
            longest = Math.max(longest, running);
            prevDate = d;
        }

        return { current, longest };
    });
}

// ─── Trends (time-series) ────────────────────────────────────────────────────

async function computeTrends(userId, metric, rangeDays) {
    return getCachedOrCompute(userId, `trends:${metric}:${rangeDays}d`, async () => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - rangeDays + 1);
        startDate.setHours(0, 0, 0, 0);
        const startStr = startDate.toISOString().split('T')[0];

        const logs = await DayLog.find({
            user: new mongoose.Types.ObjectId(userId),
            date: { $gte: startStr }
        }).sort({ date: 1 }).lean();

        const logMap = {};
        logs.forEach(log => {
            const totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
            (log.entries || []).forEach(e => {
                totals.calories += e.macros?.calories || 0;
                totals.protein  += e.macros?.protein  || 0;
                totals.carbs    += e.macros?.carbs    || 0;
                totals.fat      += e.macros?.fat      || 0;
                totals.fiber    += e.macros?.fiber    || 0;
            });
            logMap[log.date] = totals;
        });

        const points = [];
        for (let i = 0; i < rangeDays; i++) {
            const d = new Date(startDate);
            d.setDate(d.getDate() + i);
            const dateStr = d.toISOString().split('T')[0];
            points.push({
                date: dateStr,
                value: logMap[dateStr] ? Math.round(logMap[dateStr][metric] || 0) : null
            });
        }

        return { metric, rangeDays, points };
    });
}

// ─── Cache invalidation ───────────────────────────────────────────────────────

async function invalidateUserInsights(userId) {
    try {
        await InsightsCache.deleteMany({ userId });
    } catch (err) {
        console.error('[InsightsCache] Invalidation failed:', err.message);
    }
}

module.exports = { computeSummary, computeStreak, computeTrends, invalidateUserInsights };
