// src/controllers/leadershipController.js

/**
 * Controller for handling leadership advice requests.
 */

// Simulated data for leadership advice
const leadershipAdvice = [
  "Lead by example.",
  "Communicate clearly and effectively.",
  "Be open to feedback and continuous improvement.",
  "Empower your team members.",
  "Encourage innovation and creativity."
];

/**
 * Get leadership advice
 * @param {Request} req
 * @param {Response} res
 */
const getLeadershipAdvice = (req, res) => {
  // Select random advice from the array
  const randomAdvice = leadershipAdvice[Math.floor(Math.random() * leadershipAdvice.length)];
  res.json({ advice: randomAdvice });
};

module.exports = { getLeadershipAdvice };

