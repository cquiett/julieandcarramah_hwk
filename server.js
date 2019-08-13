const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const moviesController = require('./controllers/movies.js');
app.use('/movies', moviesController);


mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});
app.listen(3000, () => {
  console.log('listening');
});
