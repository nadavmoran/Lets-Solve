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

    time = sec + '.' + milli;
    if (min != 0)
      time = min + ':' + time;
    timer.innerHTML = time;

    setTimeout("timerCycle()", 100);
  }
}

function resetTimer() {
  var data = { name: 'shelly', result: time };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  // let response = await fetch('/api', options);
  // let data = await response.json();
  fetch('/api', options);
  milli = 0;
  sec = 0;
  min = 0;
  stopTimer();
  time = '0.00';
  timer.innerHTML = time;
}
