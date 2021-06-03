import {scrambleElement} from './Constants.js';
import {getTextFromList} from './tools.js';

//The socket for sending the data
var url = parent.document.URL.split('cube')[0];

const socket = io.connect(url);
const resultsTable = document.getElementById("results");

/**
 * Gets data from the server and updates the results and the scramble
 */
function updateData(data) {
  console.log(data);
  if (data.scramble) {
    scrambleElement.innerHTML = data.scramble;
    scrambleElement.value = data.scramble.split(' ');
  }

  let text = "";
  let keys = Object.keys(data);
  text = '<table style="width:50%"> <tr>    <th>Firstname</th><th>Time 1</th> </tr>'
    for (var i = 0; i < keys.length; i++) {
    text += '<tr><td>' + keys[i] + "</td><td>" + getTextFromList(data[keys[i]]) + "</td>";
  }
  text += '</tr></table>'
  resultsTable.innerHTML = text;
}
//Updates the results when getting a broadcast
socket.on("broadcast", updateData);
