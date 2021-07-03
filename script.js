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

// Function for random lower case
function randomLowerCase() {
    return lowerCase.charAt(Math.round(Math.random) * lowerCase.length);
}

// Function for random upper case
function randomUpperCase() {
    return upperCase.charAt(Math.round(Math.random) * upperCase.length);
}

// Function for random number
function randomNumber() {
    return number.charAt(Math.round(Math.random) * number.length);
}

// Function for random symbol
function randomSymbol() {
    return symbol.charAt(Math.round(Math.random) * symbol.length);
}

// Function to generate password
function generatePassword() {
    let length = window.prompt("Choose a password of at least 8 characters and no more than 128 characters.");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
