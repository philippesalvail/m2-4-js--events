// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
document.body.style.height = "100vh";
let timeStarted = Math.ceil(Math.random() * 3) + 2;
let onTime = true;
function timesUp() {
  onTime = false;
}
document.querySelector("#time").innerText = timeStarted;
let clock = setTimeout(timesUp, timeStarted + "000");
let myTime = setInterval(myTimer, 1000);
function myTimer() {
  if (timeStarted === 0) {
    clearInterval(myTime);
    document.querySelector("#time").innerText = timeStarted;
  } else {
    timeStarted -= 1;
    document.querySelector("#time").innerText = timeStarted;
    console.log("timeLeft: ", timeStarted);
  }
}
document.body.addEventListener("click", function (e) {
  let xPosition = e.pageX + "px";
  let yPosition = e.pageY + "px";
  let spanClick = document.createElement("span");
  spanClick.setAttribute(
    "style",
    "position: absolute; " + "top: " + yPosition + "; left: " + xPosition + ";"
  );
  spanClick.innerText = "You have clicked!";
  document.body.append(spanClick);
  clearInterval(myTime);
  clearTimeout(clock);
  let result = document.querySelector("#result");
  if (onTime) {
    result.innerText = "You have won!";
  } else {
    result.innerText = "You have lost!";
  }
});
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)
