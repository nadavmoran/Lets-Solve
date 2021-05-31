// Enabling require
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Loading the needed modules
import getRandomScramble from "./cube-solver/scrambler.js";
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

function updateCompetitorsStatus() {
  var keys = Object.keys(competitorsStatus);
  for (var i = 0; i < keys.length; i++) {
    competitorsStatus[keys[i]] = true;
  }
}

function publishScramble() {
  var keys = Object.keys(competitorsStatus);
  for (var i = 0; i < keys.length; i++) {
    if (competitorsStatus[keys[i]]) return
  }
  io.sockets.emit('broadcast', {scramble: getRandomScramble()});
  updateCompetitorsStatus();
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
const competitorsStatus = {};

// Loading the code to pass to the client
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

// Gets the result
app.post("/time", (req, res) => {
  var data = req.body;
  console.log(data);
  var name = data.name;
  if (!results[name]) results[name] = [];
  if (data.result) {
    results[name].push(data.result);
    competitorsStatus[name] = false;
  }
  publishScramble();
  // Broadcast the result to all connected clients
  io.sockets.emit("broadcast", results);
});
