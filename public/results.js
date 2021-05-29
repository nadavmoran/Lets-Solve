//The socket for sending the data
const socket = io.connect("http://127.0.0.1:3500");
const resultsTable = document.getElementById("results");
const scramble = document.getElementById("scramble");

/**
* Make a string from array elemnts
* @param arr array to make a string from
*/
function getTextFromList(arr) {
  var text = "";
  for (var i = 0; i < arr.length; i++) {
    text += arr[i] + ", ";
  }
  return text;
}

/**
* Gets data from the server and updates the results and the scramble
*/
function updateData(data) {
  if (data.scramble) {
    scramble.innerHTML = data.scramble;
    scramble.value = data.scramble;
  }
  let text = "";
  let keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    text += keys[i] + getTextFromList(data);
  }
  resultsTable.innerHTML = data.name + ":" + data.results;
}
//Updates the results when getting a broadcast
socket.on("broadcast", updateData);
