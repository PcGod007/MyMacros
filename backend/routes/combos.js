const express = require('express');
const MealCombo = require('../models/MealCombo');
const DayLog = require('../models/DayLog');
const protect = require('../middleware/auth');
const { updateUserFoodStats } = require('../services/foodStatsService');

const router = express.Router();
router.use(protect);

// ─── POST /api/combos  — Create new combo ────────────────────────────────────
router.post('/', async (req, res) => {
    try {
        const { name, emoji, mealType, items } = req.body;
        if (!name || !items || !items.length) {
            return res.status(400).json({ error: 'name and items are required' });
        }

        // Compute denormalized totals from items
        const totals = items.reduce((acc, item) => {
            acc.calories += item.cachedMacros?.calories || 0;
            acc.protein  += item.cachedMacros?.protein  || 0;
            acc.carbs    += item.cachedMacros?.carbs    || 0;
            acc.fat      += item.cachedMacros?.fat      || 0;
            acc.fiber    += item.cachedMacros?.fiber    || 0;
            return acc;
        }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });

        // Round totals
        Object.keys(totals).forEach(k => { totals[k] = Math.round(totals[k] * 10) / 10; });

        const combo = await MealCombo.create({
            userId: req.userId,
            name: name.trim().slice(0, 60),
            emoji: emoji || '🍽️',
            mealType: mealType || 'any',
            items,
            totals
        });

        res.status(201).json({ combo });
    } catch (err) {
        console.error('Create combo error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/combos  — List user's combos ───────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const { sort = 'recent', limit = 50 } = req.query;

        const sortMap = {
            recent:    { lastUsedAt: -1, createdAt: -1 },
            frequent:  { usageCount: -1 },
            pinned:    { isPinned: -1, lastUsedAt: -1 }
        };

        const combos = await MealCombo.find({ userId: req.userId })
            .sort(sortMap[sort] || sortMap.recent)
            .limit(Number(limit))
            .lean();

        res.json({ combos });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/combos/quick  — Top combos for dashboard strip ─────────────────
router.get('/quick', async (req, res) => {
    try {
        // Pinned first, then most recently used, max 6
        const combos = await MealCombo.find({ userId: req.userId })
            .sort({ isPinned: -1, lastUsedAt: -1 })
            .limit(6)
            .lean();
        res.json({ combos });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/combos/:id  — Single combo ─────────────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        const combo = await MealCombo.findOne({ _id: req.params.id, userId: req.userId });
        if (!combo) return res.status(404).json({ error: 'Combo not found' });
        res.json({ combo });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/combos/:id  — Update combo ─────────────────────────────────────
router.put('/:id', async (req, res) => {
    try {
        const { name, emoji, mealType, items } = req.body;
        const updates = {};
        if (name)     updates.name     = name.trim().slice(0, 60);
        if (emoji)    updates.emoji    = emoji;
        if (mealType) updates.mealType = mealType;

        if (items && items.length) {
            updates.items = items;
            const totals = items.reduce((acc, item) => {
                acc.calories += item.cachedMacros?.calories || 0;
                acc.protein  += item.cachedMacros?.protein  || 0;
                acc.carbs    += item.cachedMacros?.carbs    || 0;
                acc.fat      += item.cachedMacros?.fat      || 0;
                acc.fiber    += item.cachedMacros?.fiber    || 0;
                return acc;
            }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });
            Object.keys(totals).forEach(k => { totals[k] = Math.round(totals[k] * 10) / 10; });
            updates.totals = totals;
        }

        const combo = await MealCombo.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            { $set: updates },
            { new: true }
        );
        if (!combo) return res.status(404).json({ error: 'Combo not found' });
        res.json({ combo });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── DELETE /api/combos/:id ───────────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
    try {
        const result = await MealCombo.deleteOne({ _id: req.params.id, userId: req.userId });
        if (result.deletedCount === 0) return res.status(404).json({ error: 'Combo not found' });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/combos/:id/log  — Log entire combo to diary ──────────────────
router.post('/:id/log', async (req, res) => {
    try {
        const { meal, date } = req.body;
        if (!meal) return res.status(400).json({ error: 'meal is required' });

        const combo = await MealCombo.findOne({ _id: req.params.id, userId: req.userId });
        if (!combo) return res.status(404).json({ error: 'Combo not found' });

        const dateStr = date || new Date().toISOString().split('T')[0];

        let dayLog = await DayLog.findOne({ user: req.userId, date: dateStr });
        if (!dayLog) {
            dayLog = new DayLog({ user: req.userId, date: dateStr, entries: [] });
        }

        // Push every item as an individual entry (preserve per-food granularity)
        const newEntries = combo.items.map(item => ({
            id: `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
            foodId:      item.foodId,
            foodName:    item.foodName,
            meal,
            servingLabel: item.servingLabel,
            grams:        item.grams,
            macros: {
                calories: Math.round((item.cachedMacros?.calories || 0) * 10) / 10,
                protein:  Math.round((item.cachedMacros?.protein  || 0) * 10) / 10,
                carbs:    Math.round((item.cachedMacros?.carbs    || 0) * 10) / 10,
                fat:      Math.round((item.cachedMacros?.fat      || 0) * 10) / 10,
                fiber:    Math.round((item.cachedMacros?.fiber    || 0) * 10) / 10
            },
            sourceCombo: combo._id // traceability
        }));

        dayLog.entries.push(...newEntries);
        await dayLog.save();

        // Update combo usage stats atomically
        await MealCombo.updateOne(
            { _id: combo._id },
            { $inc: { usageCount: 1 }, $set: { lastUsedAt: new Date() } }
        );

        // Also update food stats for each item
        await Promise.allSettled(
            combo.items.map(item =>
                updateUserFoodStats(req.userId, item.foodId, item.foodName, item.servingLabel, item.grams)
            )
        );

        res.json({ entries: newEntries, itemsLogged: newEntries.length });
    } catch (err) {
        console.error('Log combo error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PATCH /api/combos/:id/pin  — Toggle pinned ──────────────────────────────
router.patch('/:id/pin', async (req, res) => {
    try {
        const combo = await MealCombo.findOne({ _id: req.params.id, userId: req.userId });
        if (!combo) return res.status(404).json({ error: 'Combo not found' });

        combo.isPinned = !combo.isPinned;
        await combo.save();
        res.json({ isPinned: combo.isPinned });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
