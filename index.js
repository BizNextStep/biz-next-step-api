const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const leadershipRoutes = require('./api/src/routes/leadershipRoutes');
const taskRoutes = require('./api/src/routes/taskRoutes');
const marketingRoutes = require('./api/src/routes/marketingRoutes');
const salesRoutes = require('./api/src/routes/salesRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/leadership', leadershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/sales', salesRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Biz Next Step API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

