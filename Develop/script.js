// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var allSpecial = ["(", "{", "}", "[", "]", "(", ")", "/", "\\", "~", ",", ";", ":", ".", "<", ">", ")", "@", "#", "$", "%"];

function generatePassword() {
  var allChoices = [];
  var newPassword = "";
  
  
  // Asks user what is the length of the new password
  var passwordLength = parseInt (prompt("What is your new password's length?. Passwords must be between 8 and 128 characters."));

  // check Rock Paper Scissor Example for working these types of problems
  if(passwordLength >= 8 && ) {
    // Uppercase?
    var useUpper = confirm("Do you want uppercase characters?");

    var useLower = confirm("Do you want lowercase characters?");

    var useSpecial = confirm("Do you want special characters?")

    var useNumber = confirm("Do you want numbers?");

    if(useUpper === true) {
      allChoices.concat(allUpper);

    }

    if(useLower === true) {
      allChoices.concat(allLower);

    }

    if(useSpecial === true) {
      allChoices.concat(allSpecial);

    }

    if(useNumber === true) {
      allChoices.concat(allNumbers);

    }

    // Lowercase?
    var useLower = confirm("Do you want lowercase characters?")
  } 

  // Randomly generate password here
  for(var i = 1; i >= passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChoices.length);

    new Password += ""
  }

  newPassword = 



  return newPassword;

  } else {
    alert("Error! Length must be between 8 and 128 characters!");
    return: 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
