const mongoose = require('mongoose');

/**
 * InsightsCache — stores pre-computed insights payloads with a TTL.
 * Mongo's TTL index auto-deletes docs after expiresAt — zero-cost Redis alternative.
 */
const InsightsCacheSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // e.g. "summary:7d", "streak", "trends:calories:30d"
    cacheKey: { type: String, required: true },
    payload:  { type: Object, required: true },
    computedAt: { type: Date, default: Date.now },
    expiresAt:  { type: Date, required: true }
});

// Mongo auto-deletes documents when expiresAt has passed
InsightsCacheSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
InsightsCacheSchema.index({ userId: 1, cacheKey: 1 }, { unique: true });

module.exports = mongoose.model('InsightsCache', InsightsCacheSchema);
