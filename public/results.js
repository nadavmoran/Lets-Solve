//The socket for sending the data
const socket = io.connect("http://127.0.0.1:3500");
const resultsTable = document.getElementById("results");

function getTextFromList(arr) {
  var text = "";
  for (var i = 0; i < arr.length; i++) {
    text += arr[i] + ", ";
  }
  return text;
}

//Updates the results when getting a broadcast
socket.on("broadcast", function(data) {
  let text = "";
  let keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    text += keys[i] + getTextFromList(data);
  }
  resultsTable.innerHTML = data.name + ":" + data.results;
});
