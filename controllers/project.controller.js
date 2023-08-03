const Project = require("../models/project.model");
const mongoose = require("mongoose");

//GET ALL PROJECTS
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET A SINGLE PROJECT

getSingleProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json("invalid id");
  }
  //   if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(400).send("Invalid id");
  //   }

  const project = await Project.findById(id);
  if (!project) {
    res.status(400).json("project not found");
  }
  res.status(200).json(project);
};

// POST  A PROJECT
const postProject = async (req, res) => {
  const data = req.body;
  try {
    const project = await Project.create({ ...data });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE A PROJECT
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json("invalid id");
  }
  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    res.status(400).json("project not found");
  }
  res.status(200).json(project);
};

// UPDATE A PROJECT
const updateProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json("invalid id");
  }
  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!project) {
    return res.status(499).json("project not found");
  }
  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
