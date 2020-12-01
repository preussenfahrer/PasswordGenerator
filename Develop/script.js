
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var allUppercase = ["A", "B", "C", ...]
// var allLowercase = ["a", "b", "c", ...]
// var allNumbers = [0, 1, 2, 3, ...]
// var allSpec = ["!", "@", "#", ...]

// Get user input for how long our password is
// Ex: var passwordLength = prompt("How many character?");

// The password is the correct length
// if(passwordLength >= 8 ...) {
  var allChoices = [];
  // Confirms (yes/no) and save that info
  var useUpper = confirm("Do you want uppercase?");
  // ... all the other choices above
  // What did the user say yes to?
  // if(useUpper === true) {
  // allChoices.concat(allUppercase);
  // }

  // for(var i = 0; i <passwordLength; i++) {
    // Generating the password using Math.random
    newPassword += randomChoice;
  // }

  return newPassword;
// }