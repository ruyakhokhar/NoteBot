import express from 'express';
import cors from 'cors';
// import fetch from 'node-fetch';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/summarize', async (req, res) => {
    const { text } = req.body;
  
    try {
      console.log("📝 Received text:", text); // log input
  
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Summarize the following note:' },
            { role: 'user', content: text },
          ],
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      res.json({ summary: response.data.choices[0].message.content });
  
    //   const data = await response.json();
    //   console.log("📥 OpenAI raw response:", data); // log raw API response
  
      if (!response.ok) {
        console.error("❌ OpenAI returned error:", data);
        return res.status(500).json({ error: data });
      }
  
      res.json({ summary: data.choices[0].message.content });
    } catch (err) {
      console.error("❌ Server Error:", err.message);
      res.status(500).json({ error: 'Server crashed while calling OpenAI' });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
