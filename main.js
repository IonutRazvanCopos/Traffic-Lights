const btn = document.querySelector("button");

let clickCount = 0;

btn.addEventListener("click", () => {
  while (clickCount <= 2) {
    clickCount++;
    if (clickCount == 1) {
      btn.innerText = "Ready!";
      document.querySelector("html").style.backgroundColor = "yellow";
      return btn.style.backgroundColor = "yellow";
    } 
    if (clickCount == 2) {
      btn.innerText = "GO!";
      document.querySelector("html").style.backgroundColor = "green";
      return btn.style.backgroundColor = "green";
    } else {
      clickCount = 0;
      btn.innerText = "Set!"
      document.querySelector("html").style.backgroundColor = "red";
      return btn.style.backgroundColor = "red";
    }
  }
});

function clickButton() {
  btn.click;
}

setInterval(clickButton, 10000);

function clickButton() {
  btn.click();
  if (clickCount === 3) {
    clickCount = 0;
  }
}