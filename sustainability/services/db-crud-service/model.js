const mongoose = require('mongoose');
const multer = require('multer');

const DataSchema = new mongoose.Schema({
  foodName: String,
  foodAmount: Number,
  foodCategory: String, 
  foodDate: Date,
  foodDescription: String,
  foodImage: { 
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Data', DataSchema);
