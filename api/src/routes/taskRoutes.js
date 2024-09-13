// In api/src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();

let tasks = [];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Create a new task
router.post('/', (req, res) => {
  const { task, dueDate } = req.body;
  const newTask = { id: tasks.length + 1, task, dueDate };
  tasks.push(newTask);
  res.json({ message: 'Task created successfully.', task: newTask });
});

// Update an existing task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, dueDate } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found.' });

  tasks[taskIndex] = { id: parseInt(id), task, dueDate };
  res.json({ message: 'Task updated successfully.', task: tasks[taskIndex] });
});

// Delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found.' });

  tasks.splice(taskIndex, 1);
  res.json({ message: 'Task deleted successfully.' });
});

module.exports = router;
