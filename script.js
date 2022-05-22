let DOM = {
  startBtn: document.getElementById("start-btn"),
  stopBtn: document.getElementById("stop-btn"),
  resetBtn: document.getElementById("reset-btn"),
  timeEl: document.getElementById("time-el"),
  minutesEl: document.getElementById("minutes-el"),
  secondsEl: document.getElementById("seconds-el"),
  titleEl: document.getElementById("title-el"),
  backgroundChangeBtn: document.getElementById("backgroundChange-btn"),
};
let upTimer = setInterval(countUpTimer, 1000);
let totalSeconds = 0;
let isRunning = false;
let nightMode = false;

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
    DOM.titleEl.innerHTML = hour + ":" + minute + ":" + seconds;
  }
}

// VISUAL CHANGE IN START BUTTON WHEN UNAVAILABLE
function changeStyleStartBtn() {
  if (DOM.startBtn.disabled == true) {
    document.getElementById("start-btn").style.opacity = "50%";
  } else {
    document.getElementById("start-btn").style.opacity = "100%";
  }
}

// CHANGE THE THEME (dark/light)
DOM.backgroundChangeBtn.addEventListener("click", function () {
  if(nightMode==false){
    DOM.backgroundChangeBtn.classList.remove("dark-theme");
    DOM.backgroundChangeBtn.classList.add("light-theme");
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    nightMode = true
  } else {
    DOM.backgroundChangeBtn.classList.remove("light-theme");
    DOM.backgroundChangeBtn.classList.add("dark-theme");
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    nightMode = false;
  }
  
});

//START THE COUNT
DOM.startBtn.addEventListener("click", function () {
  if (isRunning != true) {
    DOM.startBtn.disabled = true;
    isRunning = true;
    changeStyleStartBtn();
  }
});

//STOP THE COUNT
DOM.stopBtn.addEventListener("click", function () {
  DOM.startBtn.disabled = false;
  isRunning = false;
  changeStyleStartBtn();
});

//RESET TIMER
DOM.resetBtn.addEventListener("click", function () {
  totalSeconds = 0;
  isRunning = false;
  DOM.timeEl.innerHTML = "00:00:00";
  DOM.startBtn.disabled = false;
  changeStyleStartBtn();
  DOM.titleEl.innerHTML = "Stopwatch";
});
