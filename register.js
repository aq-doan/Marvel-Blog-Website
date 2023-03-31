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
        } else if(password !== confirmPassword) {
            colorConfirmPassword.style.backgroundColor = '#FFC0CB';
          errorMsg.textContent = "Passwords do not match";
         
          event.preventDefault();
        }else {
            event.preventDefault(); // prevent default form submission
             window.location.replace("./index.html");
        }
        }
      
      
    