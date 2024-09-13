// In api/src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('./api/src/models/db'); // Import the database connection

// Import route files
const leadershipRoutes = require('./api/src/routes/leadershipRoutes');
const taskRoutes = require('./api/src/routes/taskRoutes');
const marketingRoutes = require('./api/src/routes/marketingRoutes');
const salesRoutes = require('./api/src/routes/salesRoutes');
const userRoutes = require('./api/src/routes/usersRoutes');
const leadRoutes = require('./api/src/routes/leadsRoutes');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/leadership', leadershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/leads', leadRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

