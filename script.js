// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {

  // Prompts user after clicking generate password
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  // If user enters value less than 8 or more than 128, window prompts new altert
  if (passwordLength < 8 || passwordLength > 128) {
  generatePassword()
  } else { 
  } }

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

generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected