const express = require("express");
messageControlller = require("./controllers/messages.controller");
friendsController = require("./controllers/friends.controller");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json()); // buit in middlleware function to handel json data from request //
const friendsRouter = express.Router();

friendsRouter.post("/", friendsController.postFriend);

friendsRouter.get("/", friendsController.getFriends);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

friendsRouter.get("/:friendId", friendsController.getFriend);

app.use("/friends", friendsRouter);
app.get("/messages", messageControlller.getMessages);
app.post("/messages", messageControlller.postMessage);
