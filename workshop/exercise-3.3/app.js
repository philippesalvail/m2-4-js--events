document.body.style.height = "100vh";
for (i = 0; i < 20; i++) {
  let btn = document.createElement("button");
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);

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
    this.style.backgroundColor =
      this.style.backgroundColor == "green" ? "red" : "green";
  });
  document.body.append(btn);
}
