function getMessages(req, res) {
  res.send("<ul><li>hello satyam </li></ul>");
}
function postMessage(req, res) {
  console.log("updating messages...");
}
module.exports = {
  getMessages,
  postMessage,
};
