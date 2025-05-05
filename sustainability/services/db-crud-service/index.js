const express = require('express');
const mongoose = require('mongoose');
const Data = require('./model');

const app = express();
app.use(express.json());
const PORT = 8003;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Mongo connection error:', err));

// Create
app.post('/data', async (req, res) => {
  try {
    const data = await Data.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All
app.get('/data', async (req, res) => {
  const items = await Data.find();
  res.json(items);
});

// Read One
app.get('/data/:id', async (req, res) => {
  const item = await Data.findById(req.params.id);
  if (!item) return res.status(404).send('Not found');
  res.json(item);
});

// Update
app.put('/data/:id', async (req, res) => {
  const item = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).send('Not found');
  res.json(item);
});

// Delete
app.delete('/data/:id', async (req, res) => {
  const result = await Data.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).send('Not found');
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => console.log(`DB service running on port ${PORT}`));
