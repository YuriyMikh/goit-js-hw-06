const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputText);

function onInputText(event) {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputRef.textContent = "Anonymous";
    //outputRef.textContent = outputRef.textContent;
    //вариант не со строкой "Anonymous", а с тем что изначально было в outputRef.textContent
  }
}
