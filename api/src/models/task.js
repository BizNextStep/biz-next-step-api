// In api/src/models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  dueDate: { type: Date, required: true }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

