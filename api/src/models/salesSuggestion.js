// In api/src/models/salesSuggestion.js
const mongoose = require('mongoose');

const salesSuggestionSchema = new mongoose.Schema({
  suggestion: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const SalesSuggestion = mongoose.model('SalesSuggestion', salesSuggestionSchema);
module.exports = SalesSuggestion;

