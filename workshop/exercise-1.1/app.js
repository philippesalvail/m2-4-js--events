// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost
document.body.style.height = "100vh";
let result = true;

function hurryUp() {
  result = false;
}
setTimeout(hurryUp, 1000);

document.body.addEventListener("click", function (e) {
  if (result) document.querySelector("#result").innerText = "You won!!!";
  else document.querySelector("#result").innerText = "You Lost!!!";
});
// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
