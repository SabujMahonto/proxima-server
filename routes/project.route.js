const express = require("express");

const router = express.Router();

//route
//Get all project
router.get("/", (req, res) => {
  res.json({ message: "Get all Project" });
});

//Get a single Project
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single Project" });
});

// post a single project
router.post("/", (req, res) => {
  res.json({ message: "Post a single Project" });
});
// Delete a single project
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a single Project" });
});
// Update a single project
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a single Project" });
});
module.exports = router;
