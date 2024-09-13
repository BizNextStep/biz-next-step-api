// In api/src/routes/leadsRoutes.js
const express = require('express');
const router = express.Router();
const Lead = require('../models/lead'); // Assuming you have a lead model set up

// Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Failed to fetch leads.' });
  }
});

// Add a new lead
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newLead = new Lead({ name, email, phone });
    await newLead.save();
    res.json({ message: 'Lead added successfully!' });
  } catch (error) {
    console.error('Error adding lead:', error);
    res.status(500).json({ message: 'Failed to add lead.' });
  }
});

module.exports = router;

