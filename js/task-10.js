const divControlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestoyRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

buttonCreateRef.addEventListener("click", createBoxes);
buttonDestoyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  console.log(amount);

  const divElement = document.createElement("div");
  divElement.style.backgroundColor = getRandomHexColor();
  divElement.style.height = "30px";
  divElement.style.width = "30px";
  // divBoxesRef.append(divElement);

  divBoxesRef.insertAdjacentHTML("afterbegin", '<div>TEST!!!</div>');
}

function destroyBoxes(event) {
  divBoxesRef.innerHTML = "";
  // event.currentTarget.reset();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
