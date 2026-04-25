const mongoose = require('mongoose');

const packagedFoodSchema = new mongoose.Schema({
    barcode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String },
    per100g: {
        calories: { type: Number, default: 0 },
        protein: { type: Number, default: 0 },
        carbs: { type: Number, default: 0 },
        fat: { type: Number, default: 0 },
        fiber: { type: Number, default: 0 }
    },
    servingSize: { type: Number, default: 100 },
    servingLabel: { type: String, default: '100g' },
    imageUrl: { type: String },
    source: { type: String, enum: ['off', 'ai', 'manual'], default: 'off' },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PackagedFood', packagedFoodSchema);
