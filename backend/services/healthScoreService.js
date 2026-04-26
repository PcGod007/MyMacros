/**
 * MyMacros — Health Score Service
 * Computes a 0-100 daily nutrition quality score from a user's logs vs their targets.
 *
 * Scoring components:
 *  - Protein Adequacy  (25 pts): % of protein target reached
 *  - Calorie Adherence (25 pts): within ±15% of calorie target
 *  - Fiber Adequacy    (20 pts): % of fiber target reached
 *  - Macro Balance     (20 pts): P/C/F ratio closeness to ideal
 *  - Food Diversity    (10 pts): unique foods logged (5+ = full)
 */

const DayLog = require('../models/DayLog');
const User   = require('../models/User');
const mongoose = require('mongoose');

// ─── Helpers ─────────────────────────────────────────────────────────────────

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

/**
 * Computes adherence score for a single macro:
 * Returns a 0-1 value representing how close `actual` is to `target`.
 * If `isRange` is true (e.g., calories), penalizes going over.
 * If `isRange` is false (e.g., protein, fiber), treats target as a minimum.
 */
function adherenceScore(actual, target, isRange = true) {
    if (!target || target <= 0) return 0;
    const ratio = actual / target;
    
    if (!isRange) {
        if (ratio >= 0.9) return 1;                       // met minimum
        return clamp(ratio / 0.9, 0, 1);                  // under — linear decay
    }
    
    if (ratio >= 0.9 && ratio <= 1.15) return 1;          // sweet spot
    if (ratio < 0.9) return clamp(ratio / 0.9, 0, 1);     // under — linear decay
    return clamp(1 - (ratio - 1.15) / 0.5, 0, 1);         // over — linear decay
}

/**
 * Macro balance score: how well the caloric split matches ideal (30% P / 45% C / 25% F).
 * Returns 0-1.
 */
function macroBalanceScore(protein, carbs, fat) {
    const totalCal = (protein * 4) + (carbs * 4) + (fat * 9);
    if (totalCal < 200) return 0; // not enough data

    const pPct = (protein * 4) / totalCal;
    const cPct = (carbs   * 4) / totalCal;
    const fPct = (fat     * 9) / totalCal;

    // Ideal: protein 0.25-0.35, carbs 0.40-0.50, fat 0.20-0.30
    const pScore = 1 - clamp(Math.abs(pPct - 0.30) / 0.15, 0, 1);
    const cScore = 1 - clamp(Math.abs(cPct - 0.45) / 0.15, 0, 1);
    const fScore = 1 - clamp(Math.abs(fPct - 0.25) / 0.15, 0, 1);

    return (pScore + cScore + fScore) / 3;
}

// ─── Core Computation ────────────────────────────────────────────────────────

/**
 * Compute health score for a given userId and date string (e.g. "2024-04-25").
 * Returns a score object with overall + breakdown.
 */
async function computeHealthScore(userId, dateStr, targets) {
    const dayLog = await DayLog.findOne({
        user: new mongoose.Types.ObjectId(userId),
        date: dateStr
    }).lean();

    const entries = dayLog?.entries || [];

    // Aggregate macros
    const totals = entries.reduce((acc, e) => {
        acc.calories += e.macros?.calories || 0;
        acc.protein  += e.macros?.protein  || 0;
        acc.carbs    += e.macros?.carbs    || 0;
        fat: acc.fat += e.macros?.fat      || 0;
        acc.fiber    += e.macros?.fiber    || 0;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });

    // Unique foods logged
    const uniqueFoods = new Set(entries.map(e => e.foodId)).size;

    // No data at all
    if (totals.calories < 50) {
        return {
            overall: 0,
            components: { protein: 0, calories: 0, fiber: 0, macroBalance: 0, diversity: 0 },
            totals,
            flags: ['No food logged today'],
            computedAt: new Date().toISOString()
        };
    }

    // Score components (0-1 each)
    const proteinScore   = adherenceScore(totals.protein, targets?.protein || 100, false);
    const calorieScore   = adherenceScore(totals.calories, targets?.calories || 2000, true);
    const fiberScore     = adherenceScore(totals.fiber, targets?.fiber || 25, false);
    const balanceScore   = macroBalanceScore(totals.protein, totals.carbs, totals.fat);
    const diversityScore = clamp(uniqueFoods / 5, 0, 1);

    // Weighted sum → 0-100
    const overall = Math.round(
        (proteinScore   * 25) +
        (calorieScore   * 25) +
        (fiberScore     * 20) +
        (balanceScore   * 20) +
        (diversityScore * 10)
    );

    // Generate flags (tips for the user)
    const flags = [];
    if (proteinScore < 0.6)   flags.push('Low protein today — add a dal, paneer, or egg');
    if (fiberScore < 0.5)     flags.push('Boost fiber — try sabzi, salad, or fruit');
    if (calorieScore < 0.7)   flags.push('Calories significantly off target');
    if (balanceScore < 0.5)   flags.push('Macro balance is off — check your P/C/F split');
    if (diversityScore < 0.6) flags.push('Try eating a wider variety of foods');

    return {
        overall: clamp(overall, 0, 100),
        components: {
            protein:      Math.round(proteinScore   * 100),
            calories:     Math.round(calorieScore   * 100),
            fiber:        Math.round(fiberScore      * 100),
            macroBalance: Math.round(balanceScore   * 100),
            diversity:    Math.round(diversityScore * 100),
        },
        totals,
        flags,
        computedAt: new Date().toISOString()
    };
}

/**
 * Get health score history for `rangeDays` days ending today.
 * Returns array of { date, overall } objects.
 */
async function computeHealthScoreHistory(userId, targets, rangeDays = 7) {
    const today = new Date();
    const dates = [];
    for (let i = rangeDays - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        dates.push(d.toISOString().split('T')[0]);
    }

    const logs = await DayLog.find({
        user: new mongoose.Types.ObjectId(userId),
        date: { $in: dates }
    }).lean();

    const logMap = {};
    logs.forEach(l => { logMap[l.date] = l; });

    const history = await Promise.all(dates.map(async (dateStr) => {
        const dayLog = logMap[dateStr];
        if (!dayLog || !dayLog.entries?.length) return { date: dateStr, overall: null };

        const totals = dayLog.entries.reduce((acc, e) => {
            acc.calories += e.macros?.calories || 0;
            acc.protein  += e.macros?.protein  || 0;
            acc.carbs    += e.macros?.carbs    || 0;
            acc.fat      += e.macros?.fat      || 0;
            acc.fiber    += e.macros?.fiber    || 0;
            return acc;
        }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });

        if (totals.calories < 50) return { date: dateStr, overall: null };

        const proteinScore   = adherenceScore(totals.protein, targets?.protein || 100, false);
        const calorieScore   = adherenceScore(totals.calories, targets?.calories || 2000, true);
        const fiberScore     = adherenceScore(totals.fiber, targets?.fiber || 25, false);
        const balanceScore   = macroBalanceScore(totals.protein, totals.carbs, totals.fat);
        const uniqueFoods    = new Set(dayLog.entries.map(e => e.foodId)).size;
        const diversityScore = clamp(uniqueFoods / 5, 0, 1);

        const overall = Math.round(
            (proteinScore * 25) + (calorieScore * 25) +
            (fiberScore * 20)   + (balanceScore * 20) +
            (diversityScore * 10)
        );

        return { date: dateStr, overall: clamp(overall, 0, 100) };
    }));

    return history;
}

module.exports = { computeHealthScore, computeHealthScoreHistory };
