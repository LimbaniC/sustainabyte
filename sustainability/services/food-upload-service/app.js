const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3004; 


app.use(express.json({ limit: '20mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());


const uri = 'mongodb://root:example@food-upload-db:27017';
const client = new MongoClient(uri);

let collection;


async function start() {
  try {
    await client.connect();
    const db = client.db('sustainability'); 
    collection = db.collection('donations');
    console.log('Connected to MongoDB');

    
    app.listen(port, () => {
      console.log(`Food upload service running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

start();

 
app.post('/upload', async (req, res) => {
    try {
      const foodData = req.body;
      console.log('Received food donation:', foodData);
  
      const result = await collection.insertOne(foodData);
      res.status(200).json({ message: 'Food uploaded successfully!', id: result.insertedId });
    } catch (error) {
      console.error('Error saving donation:', error);
      res.status(500).json({ message: 'Failed to save donation' });
    }
  });

