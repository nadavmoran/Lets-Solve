//The server socket
const socket = io.connect("http://127.0.0.1:3500");

// The HTML elements
const results = document.getElementById("results");

//Updates the results when getting a broadcast
socket.on("broadcast", function(data) {
  results.innerHTML = "hello" + "/n" + 'hello';
});
