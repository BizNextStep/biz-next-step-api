// src/routes/taskRoutes.js

const express = require('express');
const { scheduleTask, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Define routes for managing tasks
router.post('/schedule', scheduleTask);
router.get('/', getAllTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

