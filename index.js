// Loading the needed modules
const express = require("express");
const app = express();
const os = require("os");

/*
 * Returns the local ip of the computer
 */
function getLocalIP() {
  var networkInterfaces = os.networkInterfaces();
  var ethernet = networkInterfaces["Ethernet"];

  for (var i = 0; i < ethernet.length; i++) {
    if (ethernet[i]["family"] == "IPv4") return ethernet[i]["address"];
  }
}

// Getting the local ip
var ip = getLocalIP();

// The port to listen
const port = 3400;
// Listening to port 3500
const server = app.listen(port, () =>
  console.log("listen at " + ip + " on port " + port)
);
const io = require("socket.io")(server);

const results = {};

// Loading the code to pass to the client
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

// Gets the result
app.post("/time", (req, res) => {
  var data = req.body;
  var name = data.name;
  if (!results[name]) results[name] = [];
  results[name].push(data.result);
  // Broadcast the result to all connected clients
  io.sockets.emit("broadcast", results);
});
