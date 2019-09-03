const express = require("express");
const projects = express.Router();
const cors = require("cors");
const Project = require("../models/Project");

projects.use(cors());

projects.post("/create", (req, res) => {
  const today = new Date();
  console.log(req.body);
  console.log("hep");
  const projectData = {
    name: req.body.name,
    description: req.body.description,
    // image: req.body.image,
    auteur: req.body.auteur,
    date: today,
    id: req.body.id
  };

  Project.create(projectData)
    .then(project => {
      res.json({
        status: project.id + "registered!"
      });
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

projects.get("/all", (req, res) => {
  Project.find().then(result => res.json(result));
});

projects.put("/modify/:id", function(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    project
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the project.");
    res.status(200).send(project);
  });
});

//delete
projects.delete("/del/:id", function(req, res) {
  Project.findByIdAndDelete(req.params.id, (err, project) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(project);
  });
});

module.exports = projects;
