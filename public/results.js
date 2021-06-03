import {scrambleElement, socket} from './Constants.js';
import {getTextFromList} from './tools.js';

const resultsTable = document.getElementById("results");

/**
 * Gets data from the server and updates the results and the scramble
 */
function updateData(data) {
  if (data.scramble) {
    scrambleElement.innerHTML = data.scramble;
    scrambleElement.value = data.scramble.split(' ');
  }

  let text = "";
  var keys = Object.keys(data);
  text = '<table><tr> <th>Competitors</th>';
  var length = getLongestListLength(data);
  for (var i = length; i > 0; i--) {
    text += '<th>solve ' + i + '</th>';
  }
  text += '</tr>';

  for (var i = 0; i < keys.length; i++) {
    text += '<tr><td>' + keys[i] + "</td>" //+ getTextFromList(data[keys[i]]) + "</td>";
    var results = data[keys[i]];
    for (var j = results.length-1; j >= 0; j--) {
      console.log(results[j]);
      text += '<td>' + results[j] + '</td>';
    }
  }
  text += '</tr></table>'
  resultsTable.innerHTML = text;
}

function getLongestListLength(data) {
  var keys = Object.keys(data);
  var longestLength = 0;

  for (var i = 0; i < keys.length; i++) {
    if (data[keys[i]].length > longestLength)
      longestLength = data[keys[i]].length;
  }
  return longestLength;
}

//Updates the results when getting a broadcast
socket.on("broadcast", updateData);
