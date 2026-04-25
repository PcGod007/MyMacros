const express = require('express');
const UserFoodStats = require('../models/UserFoodStats');
const DayLog = require('../models/DayLog');
const protect = require('../middleware/auth');
const { updateUserFoodStats } = require('../services/foodStatsService');

const router = express.Router();
router.use(protect);

// ─── GET /api/quick-log/recent ───────────────────────────────────────────────
// Last 20 unique foods logged, sorted by lastLoggedAt descending
router.get('/recent', async (req, res) => {
    try {
        const stats = await UserFoodStats.find({ userId: req.userId })
            .sort({ lastLoggedAt: -1 })
            .limit(20)
            .lean();
        res.json({ items: stats });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/quick-log/frequent ────────────────────────────────────────────
// Top 20 by freqScore (time-decayed log count)
router.get('/frequent', async (req, res) => {
    try {
        const stats = await UserFoodStats.find({ userId: req.userId })
            .sort({ freqScore: -1 })
            .limit(20)
            .lean();
        res.json({ items: stats });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/quick-log/favorites ───────────────────────────────────────────
// All favorited foods, sorted by when they were favorited
router.get('/favorites', async (req, res) => {
    try {
        const stats = await UserFoodStats.find({ userId: req.userId, isFavorite: true })
            .sort({ favoritedAt: -1 })
            .lean();
        res.json({ items: stats });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/quick-log/favorite ───────────────────────────────────────────
// Toggle favorite state  { foodId, foodName }
router.post('/favorite', async (req, res) => {
    try {
        const { foodId, foodName } = req.body;
        if (!foodId) return res.status(400).json({ error: 'foodId required' });

        const existing = await UserFoodStats.findOne({ userId: req.userId, foodId });
        let stat;

        if (existing) {
            const newState = !existing.isFavorite;
            stat = await UserFoodStats.findOneAndUpdate(
                { userId: req.userId, foodId },
                {
                    $set: {
                        isFavorite: newState,
                        favoritedAt: newState ? new Date() : null
                    }
                },
                { new: true }
            );
        } else {
            // First time this food is interacted with — create with favorite
            stat = await UserFoodStats.create({
                userId: req.userId,
                foodId,
                foodName: foodName || foodId,
                isFavorite: true,
                favoritedAt: new Date()
            });
        }

        res.json({ isFavorite: stat.isFavorite });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/quick-log/log ─────────────────────────────────────────────────
// One-tap log using preferred serving  { foodId, foodName, meal, date? }
router.post('/log', async (req, res) => {
    try {
        const { foodId, foodName, meal, date } = req.body;
        if (!foodId || !meal) {
            return res.status(400).json({ error: 'foodId and meal are required' });
        }

        const dateStr = date || new Date().toISOString().split('T')[0];
        const stats = await UserFoodStats.findOne({ userId: req.userId, foodId });

        const servingLabel = stats?.preferredServing?.servingLabel || '1 serving';
        const grams = stats?.preferredServing?.grams || 100;

        // Build entry with whatever macros are cached in stats (from last log)
        // The full macro computation would need FOOD_DATABASE — backend doesn't have it.
        // We store null macros here; frontend Quick Log will re-compute from FOOD_DATABASE.
        // For the entry we just record the food so the cloud log stays consistent.
        const entryId = `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
        const entry = {
            id: entryId,
            foodId,
            foodName,
            meal,
            servingLabel,
            grams,
            macros: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 } // frontend must patch
        };

        let dayLog = await DayLog.findOne({ user: req.userId, date: dateStr });
        if (!dayLog) {
            dayLog = new DayLog({ user: req.userId, date: dateStr, entries: [] });
        }
        dayLog.entries.push(entry);
        await dayLog.save();

        // Update stats
        await updateUserFoodStats(req.userId, foodId, foodName, servingLabel, grams);

        res.status(201).json({ entry, entries: dayLog.entries });
    } catch (err) {
        console.error('Quick log error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
