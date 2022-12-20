const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestoyRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

buttonCreateRef.addEventListener("click", createBoxes);
buttonDestoyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;

  const divElement = document.createElement("div");
  divElement.style.backgroundColor = getRandomHexColor();
  divElement.classList.add('#boxes');
  // divElement.textContent = 'TESTTT!!!'
  divBoxesRef.append(divElement);

  // const string = "<div>TESTTTTTT</div";

  // divBoxesRef.insertAdjacentHTML("afterbegin", string);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
