const form = document.querySelector("#registrationForm");
if (form) {
    form.addEventListener('submit', validateForm);
}

function validateForm(event) {

    const userName = form.elements['uname'].value;
    const email = form.elements['email'].value;
    const password = form.elements['pass'].value;
    const confirmPassword = form.elements['cpass'].value;
    const errorMsg = document.getElementById("error_message");

    const colorUserName = document.getElementById('uname');
    const colorEmail = document.getElementById('email');
    const colorConfirmPassword = document.getElementById('cpass');
    const colorPassword = document.getElementById('pass');
    
    if (userName == "") {
        colorUserName.style.backgroundColor = '#FFC0CB'
        errorMsg.textContent = "Please enter your username";
        event.preventDefault();

    } else if (email == "") {
        colorEmail.style.backgroundColor = '#FFC0CB'
        errorMsg.textContent = "Please enter your email";

        event.preventDefault();
    } else if (password == "" || confirmPassword == "") {

        errorMsg.textContent = "Please enter a password in both fields";
        colorConfirmPassword.style.backgroundColor = '#FFC0CB';
        colorPassword.style.backgroundColor = '#FFC0CB'
        event.preventDefault();
    } else if (password !== confirmPassword) {
        colorConfirmPassword.style.backgroundColor = '#FFC0CB';
        errorMsg.textContent = "Passwords do not match";

        event.preventDefault();
    } else {
        event.preventDefault(); // prevent default form submission
        window.location.replace("./index.html");
    }
    // Password  validation 
    //minimum length of 5 characters with combination of uppercase and lowercase characters
    const passPolicy = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[0-9a-zA-Z]{5,}$/;
    if (!passPolicy.test(password)) {
        colorConfirmPassword.style.backgroundColor = '#FFC0CB';
        colorPassword.style.backgroundColor = '#FFC0CB'
        errorMsg.textContent = "Password must be at least 5 characters and contain at least one digit, one uppercase letter, and one lowercase letter (Example: Abc123)";
        event.preventDefault();
        return;
    }
}

const resetButton = document.querySelector("#reset");
if (resetButton) {
    resetButton.addEventListener('click', reset);
}
function reset() {

    form.reset();
}

