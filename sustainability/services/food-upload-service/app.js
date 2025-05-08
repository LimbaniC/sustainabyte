const express = require('express');
const cors = require('cors');
const app = express();
const port = 3004;


app.use(express.json({ limit: '20mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

app.post('/upload', (req, res) => {
  const foodData = req.body;
  console.log('Received food donation:', foodData);
  res.status(200).json({ message: 'Food uploaded successfully!' });
});

app.listen(port, () => {
  console.log(`Food upload service running on port ${port}`);
});
 

// to test  run 