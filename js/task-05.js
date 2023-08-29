const userName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// console.dir(userName);

userName.addEventListener('input', onInput);

function onInput(evt) {
    const inputValue = evt.currentTarget.value;
    nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
    console.dir(inputValue);
}