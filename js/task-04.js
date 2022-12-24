//ссылки на элементы DOM с которыми бужем работать
const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const resultRef = document.querySelector("#value");

let counterValue = 0; //переменная для счетчика

//слушатель клика "-1"
decrementButtonRef.addEventListener("click", () => {
  counterValue -= 1;
  resultRef.textContent = counterValue;
});

//слушатель клика "+1"
incrementButtonRef.addEventListener("click", () => {
  counterValue += 1;
  resultRef.textContent = counterValue;
});
