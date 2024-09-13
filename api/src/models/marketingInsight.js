// In api/src/models/marketingInsight.js
const mongoose = require('mongoose');

const marketingInsightSchema = new mongoose.Schema({
  insight: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const MarketingInsight = mongoose.model('MarketingInsight', marketingInsightSchema);
module.exports = MarketingInsight;

