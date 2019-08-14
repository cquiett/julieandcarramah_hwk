// dependencies
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const db = mongoose.connection

// Environmental Variables
const mongoURI = 'mongodb://localhost:27017/movies'
const PORT = 3001

// connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

app.use(express.json())
app.use(express.static('public'))

// Routes
const moviesController = require('./controllers/movies.js')
app.use('/travels', moviesController)


app.listen(3001, () => {
  console.log('connecting ... ');
})
