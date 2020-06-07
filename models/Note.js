const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  backgroundColor: {
    type: String,
    default: "FFF",
  },
  isArchieved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Notes", NotesSchema);
