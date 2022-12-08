//ссылки на элементы DOM с которыми бужем работать
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const result = document.querySelector("#value");

let counterValue = 0; //переменная для счетчика

//слушатель клика "-1"
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  result.textContent = counterValue;
});

//слушатель клика "+1"
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  result.textContent = counterValue;
});
