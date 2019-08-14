const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  rating: String
});

module.exports = mongoose.model('Movies', movieSchema)
