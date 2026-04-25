const mongoose = require('mongoose');

/**
 * UserFoodStats — tracks how often each user logs each food.
 * Used by the Quick Log panel (Recent / Frequent / Favorites tabs).
 */
const UserFoodStatsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodId: { type: String, required: true },
    foodName: { type: String, required: true }, // denormalized for fast list render

    logCount: { type: Number, default: 0 },
    lastLoggedAt: { type: Date, default: Date.now },

    isFavorite: { type: Boolean, default: false },
    favoritedAt: { type: Date },

    // Most recent serving — pre-fill on quick-log
    preferredServing: {
        servingLabel: String,
        grams: Number
    },

    // Weighted score = logCount × exp(-daysSinceLastLog / 30)
    // Decayed nightly by the cron job; on log it is set to logCount (days=0 → exp(0)=1)
    freqScore: { type: Number, default: 0 }
});

// Compound unique: one doc per user per food
UserFoodStatsSchema.index({ userId: 1, foodId: 1 }, { unique: true });
UserFoodStatsSchema.index({ userId: 1, lastLoggedAt: -1 });
UserFoodStatsSchema.index({ userId: 1, freqScore: -1 });
UserFoodStatsSchema.index({ userId: 1, isFavorite: 1, favoritedAt: -1 });

module.exports = mongoose.model('UserFoodStats', UserFoodStatsSchema);
