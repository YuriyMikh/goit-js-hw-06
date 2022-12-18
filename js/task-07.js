const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", onFontSizeControl);

function onFontSizeControl() {
  const fS = `${fontSizeControl.value}px`;
  textSize.style.fontSize = fS;
  console.log(fS);
}
