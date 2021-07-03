// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Variables for character types
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number  = "0123456789";
const symbol = "!#$%&()*+-/<=>?@[]{}_";

// Define Function randomLowerCase
function randomLowerCase() {
    return lowerCase.charAt(Math.round(Math.random) * lowerCase.length);
}

// Define Function randomUpperCase
function randomUpperCase() {
    return upperCase.charAt(Math.round(Math.random) * upperCase.length);
}

// Define Function randomNumber
function randomNumber() {
    return number.charAt(Math.round(Math.random) * number.length);
}

// Define Function randomSymbol
function randomSymbol() {
    return symbol.charAt(Math.round(Math.random) * symbol.length);
}

// Define Function generatePassword
function generatePassword() {
    let length = window.prompt("Choose a password of at least 8 characters and no more than 128 characters.");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
