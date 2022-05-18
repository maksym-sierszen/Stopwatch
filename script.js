let DOM = {
  startBtn: document.getElementById("start-btn"),
  stopBtn: document.getElementById("stop-btn"),
  resetBtn: document.getElementById("reset-btn"),
  timeEl: document.getElementById("time-el"),
  minutesEl: document.getElementById("minutes-el"),
  secondsEl: document.getElementById("seconds-el"),
};
let upTimer = setInterval(countUpTimer, 1000);
let totalSeconds = 0;
let isRunning = false;

//COUNTING FUNCTION
function countUpTimer() {
  if (isRunning == true) {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (seconds < 10) seconds = "0" + seconds;
    DOM.timeEl.innerHTML = hour + ":" + minute + ":" + seconds;
  }
}

//START THE COUNT
DOM.startBtn.addEventListener("click", function () {
  if (isRunning != true) {
    DOM.startBtn.disabled = true;
    isRunning = true;
  }
});

//STOP THE COUNT
DOM.stopBtn.addEventListener("click", function () {
  DOM.startBtn.disabled = false;
  isRunning = false;
});

//RESET TIMER
DOM.resetBtn.addEventListener("click", function () {
  totalSeconds = 0;
  isRunning = false;
  DOM.timeEl.innerHTML = "00:00:00";
  DOM.startBtn.disabled = false;
});
