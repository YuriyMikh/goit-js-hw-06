const inputArea = document.querySelector("#validation-input");

inputArea.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputArea.dataset.length) {
    // console.log("true"); //для проверочки
    inputArea.classList.add("valid");
    inputArea.classList.remove("invalid");
  } else {
    // console.log("false"); //для проверочки
    inputArea.classList.add("invalid");
    inputArea.classList.remove("valid");
  }
}
