let date = new Date();

let section1 = document.createElement("section");
section1.setAttribute("id", "section1");

let currentTime = document.createElement("p");
let hourSpan = document.createElement("span");
let minuteSpan = document.createElement("span");
let amPmSpan = document.createElement("span");

let hours = date.getHours();
amPmSpan.innerText = hours >= 12 ? " pm" : " am";

if (hours == 0) {
  hours = 12;
}
if (hours % 12 >= 1) {
  hours = hours % 12;
}

hourSpan.innerText = hours + ":";
minuteSpan.innerText =
  date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
currentTime.append(hourSpan);
currentTime.append(minuteSpan);
currentTime.append(amPmSpan);
document.body.append(currentTime);

let section2 = document.createElement("section");
section2.setAttribute("id", "section2");
let paragraphTop = document.createElement("p");
let paragraphBottom = document.createElement("p");
let buttonStart = document.createElement("button");
buttonStart.innerText = "Start Timer";
buttonStart.addEventListener("click", function () {
  timerStarted();
});

let buttonStop = document.createElement("button");
buttonStop.innerText = "Stop Timer";
buttonStop.addEventListener("click", function () {
  timeStopped();
});
let secondSpan = document.createElement("span");
secondSpan.innerText = "0";
let secondSpan10 = document.createElement("span");
secondSpan10.innerText = "0";
let minuteSpan1 = document.createElement("span");
minuteSpan1.innerText = "0:";
let minuteSpan10 = document.createElement("span");
minuteSpan10.innerText = "0";
let start;
paragraphTop.append(minuteSpan10);
paragraphTop.append(minuteSpan1);
paragraphTop.append(secondSpan10);
paragraphTop.append(secondSpan);
section2.append(paragraphTop);
paragraphBottom.append(buttonStart);
paragraphBottom.append(buttonStop);
section2.append(paragraphTop);
section2.append(paragraphBottom);
document.body.append(section2);
let secondCounter = 0;
let secondCounterTen = 0;
let minuteCounter = 0;
let minuteCounterTen = 0;
function timerStarted() {
  start = setInterval(myStartedTime, 1000);
  function myStartedTime() {
    secondCounter += 1;
    if (secondCounter == 10 && secondCounterTen == 5) {
      secondCounter = 0;
      secondCounterTen = 0;
      minuteCounter += 1;
      minuteSpan1.innerText = minuteCounter + ":";
      secondSpan10.innerText = secondCounterTen;
      secondSpan.innerText = secondCounter;
    } else if (secondCounter == 10) {
      secondCounter = 0;
      secondCounterTen += 1;
      secondSpan10.innerText = secondCounterTen;
      secondSpan.innerText = secondCounter;
    } else if (minuteCounter == 10 && minuteCounterTen == 9) {
      secondCounter = 0;
      secondCounterTen = 0;
      minuteCounter = 0;
      minuteCounterTen = 0;
      minuteSpan10.innerText = minuteCounterTen;
      minuteSpan1.innerText = minuteCounter + ":";
      secondSpan10.innerText = secondCounterTen;
      secondSpan.innerText = secondCounter;
    } else {
      secondSpan.innerText = secondCounter;
    }
  }
}
function timeStopped() {
  clearInterval(start);
}

let section3 = document.createElement("section");
paragraphCountDown = document.createElement("p");
paragraphCountDown.innerText = "Enter your seconds";
let countDownText = document.createElement("input");
countDownText.setAttribute(
  "style",
  "text-align:center; width: 50px",
  "type",
  "text"
);
countDownText.defaultValue = "0";
let button1Start = document.createElement("button");
button1Start.innerText = "Start CountDown";
button1Start.addEventListener("click", function () {
  let audioFile = new Audio("chime.mp3");
  let secondCounter = countDownText.value.replace(/^[0]+/g, "");
  while (isNaN(secondCounter)) {
    alert("Number invalid!");
    countDownText.defaultValue = "0";
    return;
  }
  countDownText.value = secondCounter;
  let myCounter = setInterval(countDown, 1000);
  function countDown() {
    if (secondCounter == 0) {
      clearInterval(myCounter);
      audioFile.play();
      alert("time's up!");
    } else {
      secondCounter -= 1;
      countDownText.value = secondCounter;
    }
  }
});
section3.append(paragraphCountDown);
section3.append(countDownText);
section3.append(button1Start);
document.body.append(section3);
