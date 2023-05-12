const inputAreaRef = document.querySelector("#validation-input");

inputAreaRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputAreaRef.dataset.length) {
    inputAreaRef.classList.add("valid");
    inputAreaRef.classList.remove("invalid");
  } else {
    inputAreaRef.classList.add("invalid");
    inputAreaRef.classList.remove("valid");
  }
}
