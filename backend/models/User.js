const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    avatar: { type: String }, // Google profile picture URL

    // Onboarding profile
    age: { type: Number },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    height: { type: Number }, // cm
    weight: { type: Number }, // kg
    goal: { type: String, enum: ['loss', 'maintain', 'gain'] },
    activityLevel: { type: Number, default: 1.375 },

    // Custom macro targets (saved when user manually overrides)
    targets: {
        calories: { type: Number },
        protein:  { type: Number },
        carbs:    { type: Number },
        fat:      { type: Number },
        fiber:    { type: Number },
        isManual: { type: Boolean, default: false } // true = user overrode auto-calc
    },

    // Adaptive Goals Engine settings
    adaptiveSettings: {
        enabled:       { type: Boolean, default: true },
        dismissedUntil:{ type: Date, default: null }
    },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
