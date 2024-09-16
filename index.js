const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const leadershipRoutes = require('./api/src/routes/leadershipRoutes');
const taskRoutes = require('./api/src/routes/taskRoutes');
const marketingRoutes = require('./api/src/routes/marketingRoutes');
const salesRoutes = require('./api/src/routes/salesRoutes');

// Use routes
app.use('/api/leadership', leadershipRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/sales', salesRoutes);

// OpenAI GPT Route
app.post('/api/gpt', async (req, res) => {
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
      res.status(500).json({ error: 'Failed to receive a valid response from OpenAI API.' });
    }
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.message);
    res.status(500).json({ error: 'An error occurred while communicating with OpenAI API.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Biz Next Step API!');
});

// Function to start the server
const startServer = (port) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      resolve(server);
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Start the server with error handling and port flexibility
(async () => {
  let currentPort = PORT;
  const maxAttempts = 5;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await startServer(currentPort);
      break; // Server started successfully
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${currentPort} is in use, trying next port...`);
        currentPort++;
      } else {
        console.error('Failed to start server:', err);
        process.exit(1);
      }
    }
    
    if (attempt === maxAttempts) {
      console.error(`Unable to start server after ${maxAttempts} attempts`);
      process.exit(1);
    }
  }
})();
