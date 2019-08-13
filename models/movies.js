const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Movies = mongoose.model('Movie', movieSchema);

module.exports = Movies;
