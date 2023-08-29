const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", (event) => {
  console.dir(event.currentTarget.value);

  const fontSizeSpan = event.currentTarget.value + "px";
  span.style.fontSize = fontSizeSpan;
});
