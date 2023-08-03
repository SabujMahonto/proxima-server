const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const projectRoute = require("./routes/project.route");
// variables
const port = process.env.PORT || 3000;
const URI = process.env.LOCAL_URI || process.env.MONGO_URI;

// express app
const app = new express();
//middleware
app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/projects", projectRoute);
//Mongoose
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen for request
    app.listen(port, () => {
      console.log(`connection to mongo listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
