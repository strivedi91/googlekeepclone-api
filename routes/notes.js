const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get a specific note
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res.send(note);
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//add a new note
router.post("/", async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description,
    });

    const savedNote = await Note.create(note);
    res.status(200).send(savedNote);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Note.remove({ _id: req.params.id });
    res.status(200).send(deleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a note
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Note.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
