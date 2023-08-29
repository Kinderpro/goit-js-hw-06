const inputElement = document.querySelector('#validation-input');

const handler = event => {
 const inputLength = event.currentTarget.value.length;
 console.dir(inputLength);
 console.dir(Number(inputElement.dataset.length));
 if (inputLength === Number(inputElement.dataset.length)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
 } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
 }
};

inputElement.addEventListener('blur', handler);