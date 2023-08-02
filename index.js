const express = require("express");
const cors = require("cors");
require("dotenv").config();
const projectRoute = require("./routes/project.route");
// variables
const port = process.env.PORT || 3000;

// express app
const app = express();
//middleware
app.use(cors);
app.use(express.json());

//routes
app.use("/api/projects", projectRoute);

// listen for request
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
