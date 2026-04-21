const express = require('express');
const WeightLog = require('../models/WeightLog');
const protect = require('../middleware/auth');

const router = express.Router();
router.use(protect);

// ─── GET /api/weights ─────────────────────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const log = await WeightLog.findOne({ user: req.userId });
        res.json({ entries: log ? log.entries : [] });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── POST /api/weights ────────────────────────────────────────────────────────
// Add a weight entry. If an entry for the same date exists, it gets updated.
router.post('/', async (req, res) => {
    try {
        const { date, weight } = req.body;
        if (!date || weight == null) {
            return res.status(400).json({ error: 'date and weight are required' });
        }

        let log = await WeightLog.findOne({ user: req.userId });

        if (!log) {
            log = new WeightLog({ user: req.userId, entries: [] });
        }

        // Update existing date or push new
        const idx = log.entries.findIndex(e => e.date === date);
        if (idx >= 0) {
            log.entries[idx].weight = weight;
        } else {
            log.entries.push({ date, weight });
            // Keep sorted by date
            log.entries.sort((a, b) => a.date.localeCompare(b.date));
        }

        await log.save();
        res.json({ entries: log.entries });
    } catch (err) {
        console.error('Weight add error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/weights/bulk ────────────────────────────────────────────────────
// Bulk sync all weight entries (for localStorage migration)
router.put('/bulk', async (req, res) => {
    try {
        const { entries } = req.body;
        if (!Array.isArray(entries)) {
            return res.status(400).json({ error: 'entries must be an array' });
        }

        const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));

        const log = await WeightLog.findOneAndUpdate(
            { user: req.userId },
            { user: req.userId, entries: sorted },
            { upsert: true, new: true }
        );

        res.json({ entries: log.entries });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
