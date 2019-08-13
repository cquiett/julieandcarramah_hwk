const express = require("express");
const router = express.Router();
const Movies = require("../models/movies_model.js");


///////////////////////ROUTES////////////////////////////

//Create
router.post("/", (req,res) => {
  Movies.create(req.body, (error, createdMovie) => {
    res.json(createdMovie)
  });
});

//Index
router.get("/", (req, res) => {
  Movies.find({}, (error, foundMovies) => {
    res.json(foundMovies);
  });
});

//Update
router.put("/:id", (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedMovie) => {
    res.json(updatedMovie);
  });
});

//Delete
router.delete("/:id", (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (error, deletedMovie) => {
    res.json(deletedMovie);
  });
});

module.exports = router;
