// In api/src/routes/leadershipRoutes.js
const express = require('express');
const router = express.Router();

const leadershipAdvice = [
  "Lead by example.",
  "Communicate clearly and effectively.",
  "Empower your team members.",
  "Encourage innovation and creativity.",
];

router.get('/advice', (req, res) => {
  const randomAdvice = leadershipAdvice[Math.floor(Math.random() * leadershipAdvice.length)];
  res.json({ advice: randomAdvice });
});

module.exports = router;
