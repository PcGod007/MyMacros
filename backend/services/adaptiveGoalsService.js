/**
 * MyMacros — Adaptive Goals Service
 * Analyzes weight trends + calorie logs over 14 days and suggests
 * calorie target adjustments based on the user's stated goal.
 */

const DayLog = require('../models/DayLog');
const WeightLog = require('../models/WeightLog');
const mongoose = require('mongoose');

/**
 * Returns a suggestion object or null if no adjustment is needed.
 *
 * Suggestion shape:
 * {
 *   type: 'increase' | 'decrease' | 'maintain',
 *   delta: number,           // kcal change (e.g. +100 or -100)
 *   reason: string,          // human-readable explanation
 *   newCalories: number,     // suggested new target
 * }
 */
async function computeAdaptiveSuggestion(userId, currentTargets, userGoal) {
    if (!currentTargets?.calories || !userGoal) return null;

    const uid = new mongoose.Types.ObjectId(userId);
    const today = new Date();
    const fourteenDaysAgo = new Date(today);
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const fromStr = fourteenDaysAgo.toISOString().split('T')[0];

    // 1. Fetch weight logs for last 14 days (WeightLog stores all entries in one doc)
    const weightLogDoc = await WeightLog.findOne({ user: uid }).lean();
    const weightLogs = (weightLogDoc?.entries || [])
        .filter(e => e.date >= fromStr)
        .sort((a, b) => a.date.localeCompare(b.date));

    // 2. Fetch calorie logs for last 14 days
    const dayLogs = await DayLog.find({
        user: uid,
        date: { $gte: fromStr }
    }).lean();

    // Not enough data to make a suggestion
    if (weightLogs.length < 2 || dayLogs.length < 5) return null;

    // Average daily calories logged
    const activeCalorieDays = dayLogs.filter(l =>
        l.entries?.reduce((s, e) => s + (e.macros?.calories || 0), 0) > 200
    );
    if (activeCalorieDays.length < 5) return null;

    const avgCalories = activeCalorieDays.reduce((sum, l) =>
        sum + l.entries.reduce((s, e) => s + (e.macros?.calories || 0), 0), 0
    ) / activeCalorieDays.length;

    // Weight trend: difference between first and last weight log
    const firstWeight = weightLogs[0].weight;
    const lastWeight  = weightLogs[weightLogs.length - 1].weight;
    
    // Ensure we have a span of at least 7 days between the first and last weight
    const firstDate = new Date(weightLogs[0].date);
    const lastDate = new Date(weightLogs[weightLogs.length - 1].date);
    const diffDays = (lastDate - firstDate) / (1000 * 60 * 60 * 24);
    if (diffDays < 7) return null;

    const weightDelta = lastWeight - firstWeight; // positive = gained, negative = lost
    const weeklyRate  = weightDelta * (7 / Math.max(diffDays, 7)); // extrapolate to per-week

    const calorieTarget = currentTargets.calories;
    const DELTA = 100; // kcal adjustment step
    
    const timeStr = diffDays >= 13 ? 'in 2 weeks' : `in the past ${Math.round(diffDays)} days`;

    // ── Goal: LOSE weight ──────────────────────────────────────────────
    if (userGoal === 'loss') {
        if (weeklyRate > -0.1) {
            // Plateau or gaining → decrease calories
            return {
                type: 'decrease',
                delta: -DELTA,
                reason: `Your weight hasn't changed ${timeStr}. Reducing your daily target by ${DELTA} kcal can help restart progress.`,
                newCalories: calorieTarget - DELTA
            };
        }
        if (weeklyRate < -1.0) {
            // Losing too fast (>1kg/week) → increase calories for health
            return {
                type: 'increase',
                delta: +DELTA,
                reason: `You're losing weight faster than recommended (${Math.abs(weeklyRate).toFixed(1)} kg/week). A slight increase keeps you healthy and prevents muscle loss.`,
                newCalories: calorieTarget + DELTA
            };
        }
    }

    // ── Goal: GAIN weight ──────────────────────────────────────────────
    if (userGoal === 'gain') {
        if (weeklyRate < 0.1) {
            // Not gaining → increase calories
            return {
                type: 'increase',
                delta: +DELTA,
                reason: `You haven't been gaining weight. Adding ${DELTA} kcal/day can help you hit your bulk goals.`,
                newCalories: calorieTarget + DELTA
            };
        }
        if (weeklyRate > 0.75) {
            // Gaining too fast → slow down
            return {
                type: 'decrease',
                delta: -DELTA,
                reason: `You're gaining weight quickly (${weeklyRate.toFixed(1)} kg/week). Slowing down reduces excess fat gain.`,
                newCalories: calorieTarget - DELTA
            };
        }
    }

    // ── Goal: MAINTAIN ────────────────────────────────────────────────
    if (userGoal === 'maintain') {
        if (weeklyRate > 0.3) {
            return {
                type: 'decrease',
                delta: -DELTA,
                reason: `You're gaining weight while your goal is to maintain. A small reduction can help stabilize.`,
                newCalories: calorieTarget - DELTA
            };
        }
        if (weeklyRate < -0.3) {
            return {
                type: 'increase',
                delta: +DELTA,
                reason: `You're losing weight while your goal is to maintain. A small increase can help stabilize.`,
                newCalories: calorieTarget + DELTA
            };
        }
    }

    return null; // No adjustment needed
}

module.exports = { computeAdaptiveSuggestion };
