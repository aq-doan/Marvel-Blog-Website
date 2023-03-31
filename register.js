const form = document.querySelector("#register_form");
if (form) {
    form.addEventListener('submit', validateForm);
}

function validateForm(event) {
        
        const userName = form.elements['uname'].value;
        const lastName = form.elements['lname'].value;
        const eventField = form.elements['race'].value;
        const ageGroup = form.elements['age_group'].value;
        const email = form.elements['email'].value;
        const password = form.elements['pass'].value;
        const confirmPassword = form.elements['cpass'].value;
        const errorMsg = document.getElementById("error_message");

        // First name validation
        if (firstName == "") {
          errorMsg.textContent = "Please enter your first name";
          event.preventDefault();
        }else if (lastName == "") {
          errorMsg.textContent = "Please enter your last name";
          event.preventDefault();
        } else if (eventField == "") {
          errorMsg.textContent = "Please select an event to participate in";
          event.preventDefault();
        } else if (ageGroup == "") {
          errorMsg.textContent = "Please select your age group";
         
          event.preventDefault();
        } else if (email == null) {
         
          errorMsg.textContent = "Please enter your email";
          
          event.preventDefault();
        }else if (password == "" || confirmPassword == "") {
          
          errorMsg.textContent = "Please enter a password in both fields";
          
          event.preventDefault();
        } else if(password !== confirmPassword) {
         
          errorMsg.textContent = "Passwords do not match";
         
          event.preventDefault();
        }
      }