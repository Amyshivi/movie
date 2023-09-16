// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Movie = require('./movie.model');
const cors = require('cors');
  
// Creating express app object

  
// CORS is enabled for all origins


const app = express();
const port = 3000;
app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movie-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new movie
app.post('/movies', async (req, res) => {
  try {
    console.log("inside")
    const movie = new Movie(req.body);
    console.log(movie)
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all movies
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a movie by ID
app.put('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a movie by ID
app.delete('/movies/:id', async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
