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

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerical = "0123456789";
  var spcChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Set default number for password length
  // Creates prompts and measures whether the answer is between 8-128

  var pswLength = 0;  
  pswLength = window.prompt("Select between 8 and 128 characters for your password length:");
  if (pswLength < 8 || pswLength > 128) {
      window.alert("Password is not between 8 and 128 characters");
      return;
  }

  // Creates password category variables set to false
  var pswLowerCase = false;
  var pswUpperCase = false;
  var pswNumerical = false;
  var pswSpc = false;

  // Creates the options to activate password categories later

  pswLowerCase = window.confirm("Do you want lowercase characters in your password?");
  pswUpperCase = window.confirm("Do you want uppercase characters in your password?");
  pswNumerical = window.confirm("Do you want numbers in your password?");
  pswSpc = window.confirm("Do you want special characters in your password?");

  // If all categories stay false (none are selected) then return

  if (pswLowerCase === false && pswUpperCase === false && pswNumeric === false && pswSpecial === false) {
    window.alert("You must select at least one character tvpe"); 
    return;
   }

  // Creates a variable that can contain categories
  var selectedChars = [];
  
  // If categories are true push the content into the selectedChars variable
  if (pswLowerCase) {
      selectedChars.push(lowerCase);
  }
  
  if (pswUpperCase) {
      selectedChars.push(upperCase);
  }
  
  if (pswNumerical) {
      selectedChars.push(numerical);
  }
  
  if (pswSpc) {
      selectedChars.push(spcChars);
  }
  
   // Creates blank string to fill in with randomised category content

   var password = "";

   // Randomises output of selectedChars

  for (var i = 0; i < pswLength; i++) {
      var randomChar = selectedChars[Math.floor(Math.random() * selectedChars.length)];
      password += randomChar [Math.floor(Math.random() * randomChar.length)];
  }

  return (password)
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);