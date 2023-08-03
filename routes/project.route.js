const express = require("express");
const Project = require("../models/project.model");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
} = require("../controllers/project.controller");

const router = express.Router();

//route
//Get all project
router.get("/", getAllProjects);

//Get a single Project
router.get("/:id", getSingleProject);

// post a single project
router.post("/", postProject);

// Delete a single project
router.delete("/:id", deleteProject);
// Update a single project
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a single Project" });
});
module.exports = router;
