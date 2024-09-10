// src/controllers/taskController.js

/**
 * Controller for handling task management.
 */

let tasks = []; // In-memory array to store tasks (replace with a database in production)

/**
 * Schedule a new task
 * @param {Request} req
 * @param {Response} res
 */
const scheduleTask = (req, res) => {
  const { task, dueDate } = req.body;
  if (!task || !dueDate) {
    return res.status(400).json({ error: 'Task and due date are required.' });
  }

  const newTask = { id: tasks.length + 1, task, dueDate };
  tasks.push(newTask);
  res.status(201).json({ message: 'Task scheduled successfully.', task: newTask });
};

/**
 * Get all tasks
 * @param {Request} req
 * @param {Response} res
 */
const getAllTasks = (req, res) => {
  res.json(tasks);
};

/**
 * Update a task by ID
 * @param {Request} req
 * @param {Response} res
 */
const updateTask = (req, res) => {
  const { id } = req.params;
  const { task, dueDate } = req.body;
  const taskIndex = tasks.findIndex((t) => t.id == id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks[taskIndex] = { id: parseInt(id), task, dueDate };
  res.json({ message: 'Task updated successfully.', task: tasks[taskIndex] });
};

/**
 * Delete a task by ID
 * @param {Request} req
 * @param {Response} res
 */
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id == id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks.splice(taskIndex, 1);
  res.json({ message: 'Task deleted successfully.' });
};

module.exports = { scheduleTask, getAllTasks, updateTask, deleteTask };

