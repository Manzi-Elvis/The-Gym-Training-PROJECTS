const form = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword")
const terms = document.getElementById("terms");

const togglePassword = document.getElementById("togglePassword");
const strengthbar = document.querySelector(".strength span");
const successMessage = document.getElementById("successMessage")

function setError(input, message){
      const field = input.closest(".field");
      const error = field.querySelector(".error");

      input.classList.add("invalid");
      input.classList.remove("valid");
      error.textContent = message;
}

function setSuccess(input){
      const field = input.closest(".field");
      const error = field.querySelector(".error");

      input.classList.add("valid");
      input.classList.remove("invalid");
      error.textContent = "";
}

function validateName(){
      if(fullName.value.trim().length < 3){
            setError(fullName, "Name must be atleast 3 characters");
            return false;
      }

      setSuccess(fullName);
      return true;
}

function validateEmail(){
      const emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

      if(!emailPattern.test(email.value.trim())){
            setError(email, "Enter a valid email address")
            return false
      }

      setSuccess(email);
      return true;
}

function checkPasswordStrength(){
      const value = password.value;
      let strength = 0;

      if(value.length >= 8) strength++;
      if(/[A-Z]/.test(value)) strength++;
      if(/[0-9]/.test(value)) strength++;
      if(/[^A-Za-z0-9]/.test(value)) strength++;

      const widths = ["0%" , "25%" , "75%" , "100%"];
      strengthbar.style.width = widths[strength];

      return strength;
}

function validatePassword(){
      const strength = checkPasswordStrength();

      if(password.value.length < 8){
            setError(password, "Password must be atleast 8 characters.")
            return false;
      }

      setSuccess(password);
      return true;
}

function validateConfirmPassword(){
      if(confirmPassword.value !== password.value || confirmPassword.value === ""){
            setError(confirmPassword, "Passwords don't match");
            return false;
      }

      setSuccess(confirmPassword);
      return true;
}

function validateTerms(){
      const error = document.querySelector(".terms-error");

      if(!terms.checked){
            error.textContent = "You must accept the terms."
            return false;
      }

      error.textContent = ""
      return true;
}

togglePassword.addEventListener("click" , () => {
      const isHidden = password.type === "password";

      password.type = isHidden ? "text" : "password";
      confirmPassword.type = isHidden ? "text" : "password";
      togglePassword.textContent = isHidden ? "Hide" : "Show"
});

confirmPassword.addEventListener("input", validateConfirmPassword)
terms.addEventListener("change", validateTerms);

form.addEventListener("submit", (e) => {
      e.preventDefault();

      const isFormValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateTerms();

      if(isFormValid){
            successMessage.textContent = "Account created successfully!";
            form.reset();
      }
});