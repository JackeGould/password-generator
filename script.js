// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {

  // Prompts user after clicking generate password
  var passwordLength = window.prompt("How many characters would you like your password to contain?")

  // If user enters value less than 8 or more than 128, window prompts new alert
  if (passwordLength < 8 || passwordLength > 128) {
    generatePassword()
  } else {
    // Window prommpt OK/Cancel if user would like to apply specific characters
    var types = window.confirm("Click OK to confirm inlcuding special characters")
    var numbers = window.confirm("Click OK to confirm inlcuding numeric characters")
    var lowercase = window.confirm("Click OK to confirm inlcuding lowercase characters")
    var uppercase = window.confirm("Click OK to confirm inlcuding uppercase characters")

    var specialCharacters = "!@#$%^&*-?"
    var numericCharacters = 1234567890
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Empty string to be later defined
    var allCharacters = "";
    var finalPassword = "";

    // If types is true include specialCharacters
    if (types) {
      allCharacters += specialCharacters
    }

    // If numbers is true include numericCharacters
    if (numbers) {
      allCharacters += numericCharacters
    }

    // If lowercase is true include lowercaseCharacters
    if (lowercase) {
      allCharacters += lowercaseCharacters
    }

    // If uppercase is true include uppercaseCharacters
    if (uppercase) {
      allCharacters += uppercaseCharacters
    }

    // For loop, Math.Floor rounds down to nearest whole number, math random times var allCharacters length creates random string including all properties that the user selects
    for (let i = 0; i < passwordLength; i++) {
      finalPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    return finalPassword
  }
}

// Pseudocode:

// var types = window.confirm("Click OK to confirm inlcuding special characters")
// var numbers = window.confirm("Click OK to confirm inlcuding numeric characters")
// var lowercase = window.confirm("Click OK to confirm inlcuding lowercase characters")
// var uppercase = window.confirm("Click OK to confirm inlcuding uppercase characters")

// var specialCharacters = "!@#$%^&*-?"
// var numericCharacters = 1234567890
// var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
// var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// If types is true include specialCharacters
// If numbers is true include numericCharacters
// If lowercase is true include lowercaseCharacters
// If uppercase is true include uppercaseCharacters

// for (let i = ; i < ; i++) {

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);