const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json()); // buit in middlleware function to handel json data from request //

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
