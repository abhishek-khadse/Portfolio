import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { handler } from './src/api/chat.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const result = await handler(req);
    res.status(result.statusCode).json(JSON.parse(result.body));
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
