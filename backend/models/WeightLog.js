const mongoose = require('mongoose');

const WeightEntrySchema = new mongoose.Schema({
    date: { type: String, required: true }, // "2024-04-19"
    weight: { type: Number, required: true } // kg
}, { _id: false });

const WeightLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    entries: [WeightEntrySchema]
});

module.exports = mongoose.model('WeightLog', WeightLogSchema);
