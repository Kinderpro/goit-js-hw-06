const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const userData = { email, password };
    console.dir(userData);
    form.reset();
  }
}
