const buttonChangeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonChangeColor.addEventListener("click", onChangeColorBody);

function onChangeColorBody() {
  const changeColorBody = (document.body.style.backgroundColor =
    getRandomHexColor());
  colorSpan.textContent = changeColorBody;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
