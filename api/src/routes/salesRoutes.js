// In api/src/routes/salesRoutes.js
const express = require('express');
const router = express.Router();

const salesSuggestions = "Your sales suggestions data here.";

router.get('/suggestions', (req, res) => {
  res.json({ suggestions: salesSuggestions });
});

module.exports = router;

