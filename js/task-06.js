const inputAreaRef = document.querySelector("#validation-input");

inputAreaRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputAreaRef.dataset.length) {
    // console.log("true"); //для проверочки
    inputAreaRef.classList.add("valid");
    inputAreaRef.classList.remove("invalid");
  } else {
    // console.log("false"); //для проверочки
    inputAreaRef.classList.add("invalid");
    inputAreaRef.classList.remove("valid");
  }
}
