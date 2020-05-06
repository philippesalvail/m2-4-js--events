document.body.style.height = "100vh";

let btnGroup = document.createElement("div");
btnGroup.setAttribute(
  "style",
  "display: grid; grid-template-columns: auto auto auto auto; grid-gap: 10px; background-color: #2196F3; padding: 10px;"
);

for (i = 0; i < 20; i++) {
  let btn = document.createElement("button");
  btn.setAttribute(
    "style",
    "background-color: red; border: 1px solid black; text-align: center; font-size: 20px; height: 30px",
    "id",
    "btn-" + i + ";"
  );
  btn.innerText = i + 1;
  btn.addEventListener("click", function () {
    this.style.backgroundColor =
      this.style.backgroundColor == "green" ? "red" : "green";
  });
  btnGroup.append(btn);
}
document.body.append(btnGroup);
