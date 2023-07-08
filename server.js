const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.get("/", (req, res) => {
  res.send("Hello Shad");
});

app.get("/RoomEase", (req, res) => {
  res.send("Testing/Melvyn");
});

// Connect to the mongoDB database using mongoose and serve on port 3000
mongoose.connect('mongodb+srv://mtnq9:0rYBB2RkOKf2cXFH@roomeasecluster.e3k7dme.mongodb.net/?retryWrites=true&w=majority')
  .then(result => {
    console.log('Connected!');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });