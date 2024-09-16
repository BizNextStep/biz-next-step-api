const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios'); // Import axios for making HTTP requests to the OpenAI API

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
  const userPrompt = req.body.prompt; // Get the prompt from the client

  if (!userPrompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: "text-davinci-003",  // Specify the GPT model
      prompt: userPrompt,
      max_tokens: 100,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // Use the API key from the environment variable
        'Content-Type': 'application/json'
      }
    });

    if (response.data && response.data.choices) {
      res.json({ response: response.data.choices[0].text.trim() });  // Send the GPT response back to the client
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

