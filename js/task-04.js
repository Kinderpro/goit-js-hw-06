const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueElement = document.getElementById("value");

let counterValue = 0;

btnMinus.addEventListener("click", function () {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});

btnPlus.addEventListener("click", function () {
  counterValue += 1;
  valueElement.textContent = counterValue;
});
