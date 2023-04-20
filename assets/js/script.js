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

  // Set default number for password length
  // Creates prompts and measures whether the answer is between 8-128

  var pswLength = 0;  
  pswLength = window.prompt("Select between 8 and 128 characters for your password length:");
  if (pswLength < 8 || pswLength > 128) {
      window.alert("Password is not between 8 and 128 characters");
      return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);