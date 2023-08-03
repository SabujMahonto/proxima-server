const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const projectRoute = require("./routes/project.route");
// variables
const port = process.env.PORT || 3000;

// express app
const app = express();
//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/projects", projectRoute);
//Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(port, () => {
      console.log(`connection to mongo listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
