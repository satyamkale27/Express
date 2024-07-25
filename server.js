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
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use(express.json()); // buit in middlleware function to handel json data from request //
app.post("/friends", (req, req) => {
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

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
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});
