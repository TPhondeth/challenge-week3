// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Function to get random lower case
function randomLower() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.round(Math.random() * lowerCase.length)];
}
// Function to get random upper case
function randomUpper() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase[Math.round(Math.random() * upperCase.length)];
}
// Function to get random number
function randomNumber() {
    const numbers  = "0123456789";
    return numbers[Math.round(Math.random() * numbers.length)];
}
// Function to get random symbol
function randomSymbol() {
    const symbols = "!#$%&()*+-/<=>?@[]{}_";
    return symbols[Math.round(Math.random() * symbols.length)];
}

// Function to generate password
function generatePassword() {
    let passwordLength = prompt("Please choose a number between 8 to 128");

    // Validate if user input meets password criteria
    if (passwordLength === "" || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be between 8 to 128 characters.");
    }
    // Confirm user choice true or false
    else {
        let lower = confirm("Would you like Lowercase Letters?");
        let upper = confirm("Would you like Uppercase Letters?");
        let number = confirm("Would you like Numbers in your password?");
        let symbol = confirm("Would you like and Special Characters?");
    
    return passwordGenerator(passwordLength, lower, upper, number, symbol);
    }
}

// Generates password based on user input
function passwordGenerator(length, lower, upper, number, symbol) {
    let securePass = "";
    
    // For loop to choose password characters based on user input
    for (var i = 0; i <= length; i++) {
        securePass += lower ? randomLower() : "";
        securePass += upper ? randomUpper() : "";
        securePass += number ? randomNumber() : "";
        securePass += symbol ? randomSymbol() : "";
}

    return securePass.slice(0, length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
