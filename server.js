const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("heeelloooo");
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
app.get("/messages", (req, res) => {
  res.send("<ul><li>hello satyam </li></ul>");
});
app.post("/", (req, res) => {
  console.log("updating messages...");
});
