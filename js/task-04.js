//ссылки на элементы DOM с которыми бужем работать
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const resultEl = document.querySelector("#value");

let counterValue = 0; //переменная для счетчика

//слушатель клика "-1"
decrementButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  resultEl.textContent = counterValue;
});

//слушатель клика "+1"
incrementButtonEl.addEventListener("click", () => {
  counterValue += 1;
  resultEl.textContent = counterValue;
});
