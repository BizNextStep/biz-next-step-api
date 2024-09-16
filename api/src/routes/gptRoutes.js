// In api/src/routes/gptRoutes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Function to call OpenAI's API
async function callOpenAI(prompt) {
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-003", // Use your specific model name here
            prompt: prompt,
            max_tokens: 100
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].text;
    } catch (error) {
        console.error("Error communicating with OpenAI:", error.message);
        throw error;
    }
}

// Define the route to interact with GPT
router.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const gptResponse = await callOpenAI(message);
        res.json({ response: gptResponse });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch response from GPT' });
    }
});

module.exports = router;

