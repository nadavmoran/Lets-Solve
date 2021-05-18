// Loading the needed modules
const express = require("express");
const app = express();
const os = require("os");

// Getting the local ip
var networkInterfaces = os.networkInterfaces();
var ip = networkInterfaces["Ethernet"][3]["address"];

// The port to listen
const port = 3500;
// Listening to port 3500
const server = app.listen(port, () =>
  console.log("listen at " + ip + " on port " + port)
);
const io = require("socket.io")(server);

const results = {results: []};

// Loading the code to pass to the client
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

// Gets the result
app.post("/time", (request, response) => {
  var data = request.body;
  console.log(data, typeof data);
  results.name = data.name;
  results.results.push(data.result);
  // Broadcast the result to all connected clients
  io.sockets.emit("broadcast", results);
});
