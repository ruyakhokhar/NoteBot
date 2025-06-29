import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/grammarcheck', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemini-2.5-flash', // or another model from OpenRouter's list
        messages: [
          { role: 'system', content: 'Check the grammar of the text provided and only provide the text with correct grammar:' },
          { role: 'user', content: text },
        ],
        max_tokens: 100,
        usage: { include: true } // Optional: include usage info :contentReference[oaicite:5]{index=5}
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
      }
    );

    const summary = response.data.choices[0].message.content;
    // Optional: usage = response.data.usage
    res.json({ summary });
  } catch (err) {
    console.error('❌ OpenRouter error:', err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || err.message,
    });
  }
});

app.get('/api/models', async (req, res) => {
  try {
    const response = await axios.get('https://openrouter.ai/api/v1/models', {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
      }
    });
    res.json(response.data.data); // model list array
  } catch (error) {
    console.error('❌ Models fetch error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
