const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onChangeColorBody);

function onChangeColorBody() {
  const bodyColor = bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
