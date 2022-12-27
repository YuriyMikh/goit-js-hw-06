const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestoyRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

buttonCreateRef.addEventListener("click", createBoxes);
buttonDestoyRef.addEventListener("click", destroyBoxes);

let sizeDivBoxes = 30;

function createBoxes(amount) {
  amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = `${sizeDivBoxes}px`;
    divElement.style.height = `${sizeDivBoxes}px`;
    sizeDivBoxes += 10;
    inputRef.value = "";
    
    divBoxesRef.append(divElement);
  }
}

function destroyBoxes(event) {
  sizeDivBoxes = 30;
  divBoxesRef.innerHTML = "";
  inputRef.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
