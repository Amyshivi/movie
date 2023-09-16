// movie.model.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  releasedDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
