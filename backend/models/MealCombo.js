const mongoose = require('mongoose');

/**
 * ComboItem — a single food item inside a saved combo.
 * Macros are cached at save-time for fast rendering; re-computed on log if needed.
 */
const ComboItemSchema = new mongoose.Schema({
    foodId:      { type: String, required: true },
    foodName:    { type: String, required: true }, // denormalized
    servingLabel: { type: String, required: true }, // e.g. "1 katori", "100g"
    grams:       { type: Number, required: true },  // gram weight used
    // Cached macros at save time
    cachedMacros: {
        calories: Number,
        protein:  Number,
        carbs:    Number,
        fat:      Number,
        fiber:    Number
    }
}, { _id: false });

const MealComboSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    name:     { type: String, required: true, maxlength: 60 },
    emoji:    { type: String, default: '🍽️' },
    mealType: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'snacks', 'any'],
        default: 'any'
    },
    items: {
        type: [ComboItemSchema],
        validate: [
            arr => arr.length >= 1 && arr.length <= 15,
            'A combo must have between 1 and 15 items'
        ]
    },
    // Denormalized totals — fast list render without re-summing items
    totals: {
        calories: { type: Number, default: 0 },
        protein:  { type: Number, default: 0 },
        carbs:    { type: Number, default: 0 },
        fat:      { type: Number, default: 0 },
        fiber:    { type: Number, default: 0 }
    },
    usageCount:  { type: Number, default: 0 },
    lastUsedAt:  { type: Date },
    isPinned:    { type: Boolean, default: false },
    createdAt:   { type: Date, default: Date.now }
});

MealComboSchema.index({ userId: 1, lastUsedAt: -1 });
MealComboSchema.index({ userId: 1, usageCount: -1 });
MealComboSchema.index({ userId: 1, isPinned: 1, lastUsedAt: -1 });

module.exports = mongoose.model('MealCombo', MealComboSchema);
