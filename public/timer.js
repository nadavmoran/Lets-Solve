//import { username } from "./Constants";
const timer = document.getElementById("timer");
let username;

var min = 0;
var sec = 0;
var milli = 0;
var time;
var stoptime = true;


function getUsername() {
  var qs = new Querystring();
  username = qs.get("username");
  //var usernameElement = document.getElementById("username");
  //username = usernameElement.value;
}
/**
 * Starts the time
 */
function startTimer() {
  getUsername();
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}

/**
 * Stops the timer
 */
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

/**
 * Continuously updates the timer when the timer is enabled
 */
function timerCycle() {
  if (stoptime == false) {
    milli = parseInt(milli);
    sec = parseInt(sec);
    min = parseInt(min);

    milli += 1;

    if (milli == 10) {
      sec += 1;
      milli = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
      milli = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    time = sec + "." + milli;
    if (min != 0) time = min + ":" + time;
    timer.innerHTML = time;

    setTimeout("timerCycle()", 100);
  }
}

/**
 * Resets the timer
 */
function resetTimer() {
  stopTimer();
  submitTime();
  milli = 0;
  sec = 0;
  min = 0;
  time = "0.00";
  timer.innerHTML = time;
}

/**
 * Sends the time to the server
 */
function submitTime() {
  var data = {name: username, result: time};
  //The headers for sending the data
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch("/time", options);
}
