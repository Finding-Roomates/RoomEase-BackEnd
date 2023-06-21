const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/RoomEase", (req, res) => {
  res.send("Testing");
});

app.get("/Shad Testing Route", (req, res) => {
  res.send("Shad Testing");
});

app.listen(3000, () => console.log("Server is listening to port 3000"));