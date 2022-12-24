const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormChange);

function onFormChange(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = { email, password };

  console.log(formData);
  event.currentTarget.reset();
}
