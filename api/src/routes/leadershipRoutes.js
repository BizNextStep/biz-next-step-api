// src/routes/leadershipRoutes.js

const express = require('express');
const { getLeadershipAdvice } = require('../controllers/leadershipController');

const router = express.Router();

// Define the route for fetching leadership advice
router.get('/advice', getLeadershipAdvice);

module.exports = router;

