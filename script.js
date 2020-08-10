// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCasel = document.querySelector("#lowerCase");
var upperCaseu = document.querySelector("#upperCase");
var numericn = document.querySelector("#numeric");
var specialCharacters = document.querySelector("#specialCharacter");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
