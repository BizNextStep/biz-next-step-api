// In api/src/models/lead.js
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true }
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;

