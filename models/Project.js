const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
    // required: true
  },
  auteur: {
    type: String
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
