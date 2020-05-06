let btnElminator = 0;
let isWin = false;
let mainBoard = document.createElement("div");
mainBoard.setAttribute(
  "style",
  "display:flex; flex-direction: column; height: 100vh;"
);

let billBoard = document.createElement("div");
billBoard.setAttribute(
  "style",
  "display: flex; background-color: #00FFFF; padding: 10px;"
);

let scoreBoard = document.createElement("div");
scoreBoard.setAttribute("style", "flex: 1; text-align: center;");
let scoreTitle = document.createElement("h2");
scoreTitle.setAttribute("style", "display:inline;");
scoreTitle.innerText = "Button's Left: ";
let score = document.createElement("h2");
score.setAttribute("style", "display:inline;");
score.id = "btnScore";
score.innerText = "0";
scoreBoard.append(scoreTitle);
scoreBoard.append(score);

let warning = document.createElement("h2");
warning.setAttribute(
  "style",
  "display:inline; margin: 0px; visibility: hidden;"
);
warning.innerText = "Time is running out!!!";
warning.id = "warning";
let timeBoard = document.createElement("div");
timeBoard.setAttribute("style", "flex: 1; text-align: center;");
let timerTitle = document.createElement("h2");
timerTitle.setAttribute("style", "display:inline;");
timerTitle.innerText = "Time Left: ";
let timer = document.createElement("h2");
timer.setAttribute("style", "display:inline;");
timer.id = "timer";
timer.innerText = "0";

timeBoard.append(timerTitle);
timeBoard.append(timer);

billBoard.append(scoreBoard);
billBoard.append(warning);
billBoard.append(timeBoard);

mainBoard.append(billBoard);

let btnBoard = document.createElement("div");
btnBoard.setAttribute(
  "style",
  "position: relative; display:flex; justify-content: center; flex: 10; background-color: #E0FFFF;"
);
mainBoard.append(btnBoard);

let btnStartBoard = document.createElement("div");
btnStartBoard.setAttribute(
  "style",
  "flex: 1; display: flex; background-color: #00FFFF; justify-content: center;"
);

let btnStart = document.createElement("button");
btnStart.setAttribute(
  "style",
  "width: 200px; font-size: 25px; margin: 5px; background-color: #059DC0; color: white"
);
btnStart.innerText = "Begin";
let btnCount = Math.ceil(Math.random() * 20);
let timerStart = Math.ceil(Math.random() * 10) + 5;
btnStart.addEventListener("click", function () {
  this.style.display = "none";
  document.querySelector("#btnScore").innerText = btnCount;
  btnElminator = timerStart;
  document.querySelector("#timer").innerText = timerStart;
  for (i = 0; i < btnCount; i++) {
    let btn = document.createElement("button");
    let x = Math.floor(Math.random() * (btnBoard.offsetWidth - 30));
    let y = Math.floor(
      Math.random() * (btnBoard.offsetHeight - (btnBoard.offsetTop + 30)) +
        btnBoard.offsetTop
    );
    btn.setAttribute(
      "style",
      "background-color: red; height:30px; text-align:center; font-size:20px; position: absolute; " +
        "top: " +
        y +
        "px;" +
        "left: " +
        x +
        "px;",
      "id",
      "btn-" + i + ";"
    );
    btn.innerText = i + 1;
    btn.addEventListener("click", function () {
      this.style.display = "none";
      btnCount -= 1;
      document.querySelector("#btnScore").innerText = btnCount;
      if (btnCount == 0) {
        warning.innerText = "You Win!!";
        finalResult(true);
        clearInterval(startTimer);
      }
    });
    btnBoard.append(btn);
  }
  let startTimer = setInterval(gameStart, 1000);
  function gameStart() {
    timerStart -= 1;
    document.querySelector("#timer").innerText = timerStart;
    if (timerStart <= 5) {
      warning.style.visibility = "";
    }
    if (timerStart === 0) {
      finalResult(isWin);
      clearInterval(startTimer);
    }
  }
});

function finalResult(isWin) {
  warning.innerText = isWin ? "You Win!!" : "You Lose!!";
}

btnStartBoard.append(btnStart);
mainBoard.append(btnStartBoard);
document.body.append(mainBoard);
