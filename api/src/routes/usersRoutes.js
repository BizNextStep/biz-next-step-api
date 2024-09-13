// In api/src/routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a user model set up

// Register a new user
router.post('/register', async (req, res) => {
  const { email, location } = req.body;

  try {
    const newUser = new User({ email, location });
    await newUser.save();
    res.json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Failed to register user.' });
  }
});

module.exports = router;

