const express = require('express');
const DayLog = require('../models/DayLog');
const protect = require('../middleware/auth');
const { updateUserFoodStats } = require('../services/foodStatsService');
const { invalidateUserInsights } = require('../services/insightsService');

const router = express.Router();
router.use(protect);

// ─── GET /api/logs?date=2024-04-19 ───────────────────────────────────────────
// Returns all food entries for a specific day
router.get('/', async (req, res) => {
    try {
        const { date } = req.query;
        if (!date) return res.status(400).json({ error: 'date query param required' });

        const dayLog = await DayLog.findOne({ user: req.userId, date });
        res.json({ date, entries: dayLog ? dayLog.entries : [] });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/logs/range?from=2024-04-01&to=2024-04-30 ───────────────────────
// Returns logs for a date range (used by Insights charts)
router.get('/range', async (req, res) => {
    try {
        const { from, to } = req.query;
        if (!from || !to) return res.status(400).json({ error: 'from and to are required' });

        const logs = await DayLog.find({
            user: req.userId,
            date: { $gte: from, $lte: to }
        }).sort({ date: 1 });

        res.json({ logs });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/logs/:date/entries ─────────────────────────────────────────────
// Add a food entry to a day
router.post('/:date/entries', async (req, res) => {
    try {
        const { date } = req.params;
        const entry = req.body;

        if (!entry || !entry.foodId || !entry.meal) {
            return res.status(400).json({ error: 'Invalid entry data' });
        }

        // Generate a unique ID for this local entry if not provided
        if (!entry.id) {
            entry.id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        }

        let dayLog = await DayLog.findOne({ user: req.userId, date });

        if (!dayLog) {
            dayLog = new DayLog({ user: req.userId, date, entries: [] });
        }

        dayLog.entries.push(entry);
        await dayLog.save();

        // Track stats (fire-and-forget — never block the response)
        updateUserFoodStats(
            req.userId,
            entry.foodId,
            entry.foodName,
            entry.servingLabel || entry.serving,
            entry.grams || 100
        ).catch(() => {});

        // Invalidate cached insights so next load is fresh
        invalidateUserInsights(req.userId).catch(() => {});

        res.status(201).json({ entry, entries: dayLog.entries });
    } catch (err) {
        console.error('Add entry error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── DELETE /api/logs/:date/entries/:entryId ──────────────────────────────────
// Remove a specific food entry from a day
router.delete('/:date/entries/:entryId', async (req, res) => {
    try {
        const { date, entryId } = req.params;

        const dayLog = await DayLog.findOne({ user: req.userId, date });
        if (!dayLog) return res.status(404).json({ error: 'No log found for this date' });

        const before = dayLog.entries.length;
        dayLog.entries = dayLog.entries.filter(e => e.id !== entryId);

        if (dayLog.entries.length === before) {
            return res.status(404).json({ error: 'Entry not found' });
        }

        await dayLog.save();

        // Invalidate cached insights
        invalidateUserInsights(req.userId).catch(() => {});

        res.json({ entries: dayLog.entries });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/logs/:date ──────────────────────────────────────────────────────
// Full replace of a day's entries (bulk sync from localStorage migration)
router.put('/:date', async (req, res) => {
    try {
        const { date } = req.params;
        const { entries } = req.body;

        if (!Array.isArray(entries)) {
            return res.status(400).json({ error: 'entries must be an array' });
        }

        const dayLog = await DayLog.findOneAndUpdate(
            { user: req.userId, date },
            { user: req.userId, date, entries },
            { upsert: true, new: true }
        );

        res.json({ date, entries: dayLog.entries });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
