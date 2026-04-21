const express = require('express');
const User = require('../models/User');
const protect = require('../middleware/auth');

const router = express.Router();
router.use(protect); // All routes require auth

// ─── GET /api/user/profile ────────────────────────────────────────────────────
router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/user/profile ────────────────────────────────────────────────────
// Updates profile fields: name, age, gender, height, weight, goal, activityLevel
router.put('/profile', async (req, res) => {
    try {
        const allowed = ['name', 'age', 'gender', 'height', 'weight', 'goal', 'activityLevel'];
        const updates = {};
        allowed.forEach(field => {
            if (req.body[field] !== undefined) updates[field] = req.body[field];
        });

        const user = await User.findByIdAndUpdate(
            req.userId,
            { $set: updates },
            { new: true, runValidators: true }
        ).select('-password');

        res.json({ user });
    } catch (err) {
        console.error('Profile update error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── GET /api/user/targets ────────────────────────────────────────────────────
// Returns saved macro targets from DB (if user has set them manually)
router.get('/targets', async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('targets');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ targets: user.targets || null });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// ─── PUT /api/user/targets ────────────────────────────────────────────────────
// Persists manually set macro targets to DB
router.put('/targets', async (req, res) => {
    try {
        const { calories, protein, carbs, fat, fiber } = req.body;
        if (!calories || !protein || !carbs || !fat || !fiber) {
            return res.status(400).json({ error: 'All macro fields are required' });
        }

        const user = await User.findByIdAndUpdate(
            req.userId,
            {
                $set: {
                    'targets.calories': Number(calories),
                    'targets.protein':  Number(protein),
                    'targets.carbs':    Number(carbs),
                    'targets.fat':      Number(fat),
                    'targets.fiber':    Number(fiber),
                    'targets.isManual': true
                }
            },
            { new: true }
        ).select('targets');

        res.json({ targets: user.targets });
    } catch (err) {
        console.error('Targets update error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
