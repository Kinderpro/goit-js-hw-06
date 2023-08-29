const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
