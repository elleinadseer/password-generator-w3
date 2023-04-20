// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {

  // Strings of characters that can be added to password

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerical = "0123456789";
  const spcChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);