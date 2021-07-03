// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Declaring variables for character types
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number  = "0123456789";
let symbol = "!#$%&()*+-/<=>?@[]{}_";

// Functions for random character types


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
