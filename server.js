const express = require("express");
const mongoConnect = require('./util/database').mongoConnect;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Shad");
});

app.get("/RoomEase", (req, res) => {
  res.send("Testing/Melvyn");
});

app.get("/Shad Testing Route", (req, res) => {
  res.send("Shad Testing");
});

app.get("/Shad Testing Route Pt 2.2", (req, res) => {
  res.send("Shad Testing Pt 2.2");
});

mongoConnect( () => {
  app.listen(3000, () => console.log("Server is listening to port 3000"));
});