const UserFoodStats = require('../models/UserFoodStats');

/**
 * updateUserFoodStats
 * Called after every successful food log (single food OR combo item).
 * Uses atomic $inc/$set — safe under concurrent requests.
 *
 * @param {string} userId
 * @param {string} foodId
 * @param {string} foodName
 * @param {string} servingLabel  — e.g. "1 katori"
 * @param {number} grams         — gram weight logged
 */
async function updateUserFoodStats(userId, foodId, foodName, servingLabel, grams) {
    try {
        const updated = await UserFoodStats.findOneAndUpdate(
            { userId, foodId },
            {
                $inc: { logCount: 1 },
                $set: {
                    foodName,
                    lastLoggedAt: new Date(),
                    preferredServing: { servingLabel, grams }
                },
                $setOnInsert: { freqScore: 0, isFavorite: false }
            },
            { upsert: true, new: true }
        );

        // freqScore: on same-day log daysSince=0 → exp(0)=1 → score = logCount
        await UserFoodStats.updateOne(
            { _id: updated._id },
            { $set: { freqScore: updated.logCount } }
        );
    } catch (err) {
        // Non-fatal — stats failure must never break the log flow
        console.error('[FoodStats] Failed to update stats:', err.message);
    }
}

module.exports = { updateUserFoodStats };
