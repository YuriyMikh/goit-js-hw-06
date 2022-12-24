const fontSizeControlRef = document.querySelector("#font-size-control");
const textSizeRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", onFontSizeControl);

function onFontSizeControl() {
  const fontSize = `${fontSizeControlRef.value}px`;
  textSizeRef.style.fontSize = fontSize;
}
