//validation for loginForm
const form = document.querySelector("#registrationForm");
if (form) {
  form.addEventListener('submit', validateForm);
}

function validateForm(event) {

  const userName = form.elements['uname'].value;
  const colorUserName = document.getElementById('uname');
  const password = form.elements['pass'].value;
  const colorPassword = document.getElementById('pass');
  const errorMsg = document.getElementById("error_message");

  if (userName == "") {
    colorUserName.style.backgroundColor = '#FFC0CB'
    errorMsg.textContent = "Please enter your username";
    event.preventDefault();

  } else if (password == "") {
    colorPassword.style.backgroundColor = '#FFC0CB'
    errorMsg.textContent = "Please enter a password";
    event.preventDefault();

  } else {
    event.preventDefault(); // prevent default form submission
    window.location.replace("./index.html");


  }
}