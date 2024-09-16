const express = require('express');
const router = express.Router();

// Import specific route modules
const leadershipRoutes = require('./leadershipRoutes');
const taskRoutes = require('./taskRoutes');
const marketingRoutes = require('./marketingRoutes');
const salesRoutes = require('./salesRoutes');
const userRoutes = require('./usersRoutes');
const leadRoutes = require('./leadsRoutes');

// Use specific routes
router.use('/leadership', leadershipRoutes);
router.use('/tasks', taskRoutes);
router.use('/marketing', marketingRoutes);
router.use('/sales', salesRoutes);
router.use('/users', userRoutes);
router.use('/leads', leadRoutes);

// Example route for leadership advice (if not covered in leadershipRoutes)
router.get('/leadership/advice', (req, res) => {
  res.json({ advice: 'Stay committed to your vision.' });
});

// Example route for task automation (if not covered in taskRoutes)
router.post('/tasks/schedule', (req, res) => {
  const { task, dueDate } = req.body;
  res.json({ message: `Task "${task}" scheduled for ${dueDate}` });
});

module.exports = router;

