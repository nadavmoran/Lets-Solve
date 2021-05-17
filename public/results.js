//The socket for sending the data
const socket = io.connect("http://127.0.0.1:3500");

//Updates the results when getting a broadcast
socket.on("broadcast", function(data) {
  console.log(data);
  results = document.getElementById("results");
  results.innerHTML = data.name + ":" + data.results;
});
