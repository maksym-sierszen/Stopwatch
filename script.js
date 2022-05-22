let DOM = {
  startBtn: document.getElementById("start-btn"),
  stopBtn: document.getElementById("stop-btn"),
  resetBtn: document.getElementById("reset-btn"),
  timeEl: document.getElementById("time-el"),
  minutesEl: document.getElementById("minutes-el"),
  secondsEl: document.getElementById("seconds-el"),
  titleEl: document.getElementById("title-el"),
  themeChangeBtn: document.getElementById("themeChange-btn"),
};

let upTimer = setInterval(countUpTimer, 1000);
let totalSeconds = 0;
let isRunning = false;
let darkMode = "disabled";

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

function enableDarkMode() {
  DOM.themeChangeBtn.classList.remove("light-theme");
  DOM.themeChangeBtn.classList.add("dark-theme");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

function disableDarkMode() {
  DOM.themeChangeBtn.classList.remove("dark-theme");
  DOM.themeChangeBtn.classList.add("light-theme");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}
// CHANGE THE THEME (dark/light)
DOM.themeChangeBtn.addEventListener("click", function () {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode == "disabled") {
    disableDarkMode();
    localStorage.setItem("dark-mode", "enabled");
  } else {
    enableDarkMode();
    localStorage.setItem("dark-mode", "disabled");
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

