const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Biz Next Step API!');
});

// Import and use routes
const leadershipRoutes = require('./src/routes/leadershipRoutes');
const taskRoutes = require('./src/routes/taskRoutes');

// Register the routes
app.use('/api/leadership', leadershipRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

