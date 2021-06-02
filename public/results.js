import {scrambleElement} from './Constants.js';

//The socket for sending the data
var url = parent.document.URL.split('cube')[0];

const socket = io.connect(url);
const resultsTable = document.getElementById("results");

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
  console.log(data);
  if (data.scramble) {
    scrambleElement.innerHTML = data.scramble;
    scrambleElement.value = data.scramble;
  }

  let text = "";
  let keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    text += keys[i] + ":" + getTextFromList(data[keys[i]]);
  }
  resultsTable.innerHTML = text;
}
//Updates the results when getting a broadcast
socket.on("broadcast", updateData);
