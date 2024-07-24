const express = require("express");
const app = express();
const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "Albert einstein",
  },
  {
    id: 1,
    name: "Satyam kale",
  },
];
app.get("/friends", (req, res) => {
  res.json(friends);
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
