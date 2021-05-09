const timer = document.getElementById('timer');

var min = 0;
var sec = 0;
var milli = 0;
var time;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

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

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    time = min + ':' + sec + '.' + milli;
    timer.innerHTML = time;

    setTimeout("timerCycle()", 100);
  }
}

function resetTimer() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time })
  };
  fetch('/api', options);
  milli = 0;
  sec = 0;
  min = 0;
  stopTimer();
  time = '00:00.00';
  timer.innerHTML = time;
}
