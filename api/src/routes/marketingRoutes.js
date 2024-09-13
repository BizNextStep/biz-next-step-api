// In api/src/routes/marketingRoutes.js
const express = require('express');
const router = express.Router();

const marketingInsights = "Your marketing insights data here.";

router.get('/insights', (req, res) => {
  res.json({ insights: marketingInsights });
});

module.exports = router;

