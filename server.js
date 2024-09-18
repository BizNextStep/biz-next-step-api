const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('./models/db'); // Ensure this path is correct
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB successfully');
});
mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Import route files
const leadershipRoutes = require('./routes/leadershipRoutes');
const taskRoutes = require('./routes/taskRoutes');
const marketingRoutes = require('./routes/marketingRoutes');
const salesRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/usersRoutes');
const leadRoutes = require('./routes/leadsRoutes');

// Use routes
app.use('/api/leadership', leadershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/leads', leadRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Biz Next Step API!');
});

// OpenAI API Route
app.post('/api/gpt', async (req, res, next) => {
  const userPrompt = req.body.prompt;
  if (!userPrompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: "text-davinci-003",
      prompt: userPrompt,
      max_tokens: 100,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.data && response.data.choices) {
      res.json({ response: response.data.choices[0].text.trim() });
    } else {
      throw new Error('Failed to receive a valid response from OpenAI API.');
    }
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.message);
    next(error);
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error details:', err);
  res.status(500).json({ 
    error: 'An error occurred', 
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
