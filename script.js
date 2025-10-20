var password = document.getElementById('passwordInput');
var strengthMessage = document.getElementById('strengthMessage');
var longEnough = document.getElementById('longEnough');
var hasNumber = document.getElementById('hasNumber');
var hasSpecialChar = document.getElementById('hasSpecialChar');
var hasUpperCase = document.getElementById('hasUpperCase');

var message = "Weak";
strengthMessage.innerText = message;
strengthMessage.style.fontWeight = "bold";
strengthMessage.style.color = "red";
var longEnoughMessage = "No";
longEnough.innerText = longEnoughMessage;
longEnough.style.color = "red";
longEnough.style.fontWeight = "bold";
var hasNumberMessage = "No";
hasNumber.innerText = hasNumberMessage;
hasNumber.style.fontWeight = "bold";
hasNumber.style.color = "red";
var hasSpecialCharMessage = "No";
hasSpecialChar.innerText = hasSpecialCharMessage;
hasSpecialChar.style.fontWeight = "bold";
hasSpecialChar.style.color = "red";
var hasUpperCaseMessage = "No";
hasUpperCase.innerText = hasUpperCaseMessage;
hasUpperCase.style.fontWeight = "bold";
hasUpperCase.style.color = "red";

password.addEventListener('input', () => {
  var pwd = password.value;

  if (pwd.length >= 8) {
    longEnoughMessage = "Yes";
    longEnough.style.color = "green";
    longEnough.style.fontWeight = "bold";
  } else {
    longEnoughMessage = "No";
    longEnough.style.color = "red";
    longEnough.style.fontWeight = "bold";
  }

  if (/\d/.test(pwd)) {
    hasNumberMessage = "Yes";
    hasNumber.style.color = "green";
    hasNumber.style.fontWeight = "bold";
  } else {
    hasNumberMessage = "No";
    hasNumber.style.color = "red";
    hasNumber.style.fontWeight = "bold";
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
    hasSpecialCharMessage = "Yes";
    hasSpecialChar.style.color = "green";
    hasSpecialChar.style.fontWeight = "bold";
  } else {
    hasSpecialCharMessage = "No";
    hasSpecialChar.style.color = "red";
    hasSpecialChar.style.fontWeight = "bold";
  }

  if (/[A-Z]/.test(pwd)) {
    hasUpperCaseMessage = "Yes";
    hasUpperCase.style.color = "green";
    hasUpperCase.style.fontWeight = "bold";
  } else {
    hasUpperCaseMessage = "No";
    hasUpperCase.style.color = "red";
    hasUpperCase.style.fontWeight = "bold";
  }

  longEnough.innerText = longEnoughMessage;
  hasNumber.innerText = hasNumberMessage;
  hasSpecialChar.innerText = hasSpecialCharMessage;
  hasUpperCase.innerText = hasUpperCaseMessage;
  if (longEnoughMessage === "Yes" && hasNumberMessage === "Yes" && hasSpecialCharMessage === "Yes" && hasUpperCaseMessage === "Yes") {
    strengthMessage = "Strong";
    strengthMessage.style.color = "green";
    strengthMessage.fontWeight = "bold";
  } else if (longEnoughMessage === "Yes" && (hasNumberMessage === "Yes" || hasSpecialCharMessage === "Yes" || hasUpperCaseMessage === "Yes")) {
    strengthMessage = "Medium";
    strengthMessage.style.color = "orange";
    strengthMessage.fontWeight = "bold";
  } else {
    strengthMessage = "Weak";
    strengthMessage.style.color = "red";
    strengthMessage.fontWeight = "bold";
  }
})