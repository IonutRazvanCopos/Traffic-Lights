const btn = document.querySelector("button");

let currentColor = 0;

const colors = ["red", "yellow", "green"];
const colorsName = ["SET!", "READY!", "GO!"]

function changingColor() {
  btn.style.backgroundColor = colors[currentColor];
  btn.innerText = colorsName[currentColor];
  document.querySelector("html").style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

btn.addEventListener("click", changingColor)

setInterval(changingColor, 10000);
