// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Function to get random lower case
function getRandomLower() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.round(Math.random() * lowerCase.length)];
}
// Function to get random upper case
function getRandomUpper() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase[Math.round(Math.random() * upperCase.length)];
}
// Function to get random number
function getRandomNumber() {
    const number  = "0123456789";
    return number[Math.round(Math.random() * number.length)];
}

// Function to get random symbol
function getRandomSymbol() {
    const symbols = "!#$%&()*+-/<=>?@[]{}_";
    return symbols[Math.round(Math.random() * symbols.length)];
}

// Function to generate password
function generatePassword() {
    let pw = prompt("Choose a password of at least 8 characters and no more than 128 characters.");

    // Validate minimum length of password
    if (pw === "" || pw.length < 8) {
        alert("Password length must be at least 8 characters.");
    }
    // Validate maximum length of password
    if (pw.length > 128) {
        alert("Password length must not exceed 128 characters.");
    }
    else {
        const hasLower = confirm("Would you like a Lower Case character?");
        const hasUpper = confirm("Would you like an Upper Case character?");
        const hasNumber = confirm("Would you like a Number?");
        const hasSymbol = confirm("Would you like a Symbol?");

    return passwordGenerator(hasLower, hasUpper, hasNumber, hasSymbol);
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
