const mongoose = require('mongoose');

// A single food item logged in a meal
const FoodEntrySchema = new mongoose.Schema({
    id: String,
    foodId: String,
    foodName: String,
    meal: { type: String, enum: ['breakfast', 'lunch', 'snacks', 'dinner'] },
    servingLabel: String,
    grams: Number,
    quantity: Number,
    macros: {
        calories: Number,
        protein: Number,
        carbs: Number,
        fat: Number,
        fiber: Number
    }
}, { _id: false });

const DayLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true }, // ISO date string: "2024-04-19"
    entries: [FoodEntrySchema]
}, {
    // Unique index: one document per user per day
    indexes: [{ unique: true, fields: { user: 1, date: 1 } }]
});

DayLogSchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('DayLog', DayLogSchema);
