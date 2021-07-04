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
    let passLength = prompt("Please choose a number between 8 to 128");

    // Validate if user input meets password criteria
    if (passLength === "" || passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Password length must be between 8 to 128 characters.");
    }
    else {
        let lowerC = confirm("Would you like Lowercase Letters?");
        let upperC = confirm("Would you like Uppercase Letters?");
        let numb = confirm("Would you like Numbers in your password?");
        let symb = confirm("Would you like and Special Characters?");

    return passwordGenerator(passLength, lowerC, upperC, numb, symb);
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
