require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Portfolio = require('./models/Portfolio');

const app = express();
const PORT = 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fathima_portfolio';

app.use(cors());
app.use(express.json());

app.get('/api/portfolio', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found. Run npm run seed in the server folder.' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Could not retrieve portfolio data.', error: error.message });
  }
});

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error.message);
    console.error('Make sure the local MongoDB service is running.');
  });
