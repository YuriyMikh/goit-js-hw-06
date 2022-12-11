const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputText);

function onInputText(event) {
  outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
    //outputEl.textContent = outputEl.textContent;
    //вариант не со строкой "Anonymous", а стем что изначально было в outputEl.textContent
  }
}
