const express = require("express");
const mongoConnect = require('./util/database').mongoConnect;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Shad");
});

app.get("/RoomEase", (req, res) => {
  res.send("Testing/Melvyn");
});

mongoConnect( () => {
  app.listen(3000, () => console.log("Server is listening to port 3000"));
});