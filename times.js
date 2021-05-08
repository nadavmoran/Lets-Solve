const timer = document.getElementById('timer');

var min = 0;
var sec = 0;
var mili = 0;
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
    mili = parseInt(mili);
    sec = parseInt(sec);
    min = parseInt(min);

    mili += 1;

    if (mili == 100) {
      sec += 1;
      mili = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
      mili = 0;
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
    if (mili < 10 || mili == 0) {
      mili = '0' + mili;
    }

    timer.innerHTML = min + ':' + sec + '.' + mili;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
  mili = 0;
  sec = 0;
  min = 0;
  stopTimer();
  timer.innerHTML = '00:00.00';
}
