const inputArea = document.querySelector("#validation-input");

inputArea.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputArea.dataset.length) {
    console.log("true");
    inputArea.classList.add("valid");
  } else {
    console.log("false");
    inputArea.classList.add("invalid");
  }
}
