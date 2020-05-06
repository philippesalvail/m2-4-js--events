// Exercise 1.0
// ------------
document.body.style.height = "100vh";
document.body.addEventListener("click", function (e) {
  var pageX = e.pageX + "px";
  var pageY = e.pageY + "px";
  var clickSpan = document.createElement("span");
  clickSpan.setAttribute(
    "style",
    "position: absolute;" + "top: " + pageY + ";" + "left: " + pageX + ";"
  );
  clickSpan.innerText = "You clicked here!";
  document.body.append(clickSpan);
});
