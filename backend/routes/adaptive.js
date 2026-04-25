const express = require('express');
const protect = require('../middleware/auth');
const User = require('../models/User');
const { computeAdaptiveSuggestion } = require('../services/adaptiveGoalsService');
const { invalidateUserInsights } = require('../services/insightsService');

const router = express.Router();
router.use(protect);

// ─── GET /api/adaptive/suggestion ────────────────────────────────────────────
// Returns a suggestion object or null if conditions aren't met / user dismissed recently
router.get('/suggestion', async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('targets goal adaptiveSettings').lean();
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Respect dismissed state
        const dismissedUntil = user.adaptiveSettings?.dismissedUntil;
        if (dismissedUntil && new Date(dismissedUntil) > new Date()) {
            return res.json({ suggestion: null, dismissedUntil });
        }

        // Adaptive disabled by user
        if (user.adaptiveSettings?.enabled === false) {
            return res.json({ suggestion: null, reason: 'adaptive_disabled' });
        }

        const suggestion = await computeAdaptiveSuggestion(
            req.userId,
            user.targets,
            user.goal
        );

        res.json({ suggestion });
    } catch (err) {
        console.error('Adaptive suggestion error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/adaptive/apply ─────────────────────────────────────────────────
// User accepts the suggestion — update their calorie target
router.post('/apply', async (req, res) => {
    try {
        const { newCalories } = req.body;
        if (!newCalories || isNaN(newCalories)) {
            return res.status(400).json({ error: 'newCalories required' });
        }

        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Update calories target (keep other macros intact)
        user.targets = user.targets || {};
        user.targets.calories = Math.round(newCalories);

        // Scale protein/carbs/fat proportionally
        const oldCal = user.targets.calories || 2000;
        const ratio  = newCalories / oldCal;
        if (user.targets.protein) user.targets.protein = Math.round(user.targets.protein * ratio);
        if (user.targets.carbs)   user.targets.carbs   = Math.round(user.targets.carbs   * ratio);
        if (user.targets.fat)     user.targets.fat      = Math.round(user.targets.fat     * ratio);

        user.targets.calories = Math.round(newCalories);
        user.markModified('targets');
        await user.save();

        // Invalidate insights cache
        invalidateUserInsights(req.userId).catch(() => {});

        res.json({ targets: user.targets, message: 'Targets updated!' });
    } catch (err) {
        console.error('Adaptive apply error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/adaptive/dismiss ───────────────────────────────────────────────
// User dismisses the suggestion for 14 days
router.post('/dismiss', async (req, res) => {
    try {
        const dismissedUntil = new Date();
        dismissedUntil.setDate(dismissedUntil.getDate() + 14);

        await User.findByIdAndUpdate(req.userId, {
            $set: { 'adaptiveSettings.dismissedUntil': dismissedUntil }
        });

        res.json({ dismissedUntil });
    } catch (err) {
        console.error('Adaptive dismiss error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/adaptive/settings ───────────────────────────────────────────────
// Toggle adaptive engine on/off
router.put('/settings', async (req, res) => {
    try {
        const { enabled } = req.body;
        if (typeof enabled !== 'boolean') {
            return res.status(400).json({ error: 'enabled (boolean) required' });
        }

        await User.findByIdAndUpdate(req.userId, {
            $set: { 'adaptiveSettings.enabled': enabled }
        });

        res.json({ enabled });
    } catch (err) {
        console.error('Adaptive settings error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
