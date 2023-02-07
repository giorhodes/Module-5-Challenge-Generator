// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    // Variable to store length of password from user input
    let length = parseInt(prompt("How many characters would you like your password to contain?"));

    if (isNaN(length) == true) {
        alert("Password length must be provided as a number.");
        return;
    }

    if (length < 10) {
        alert("Password length must be at least 10 characters.");
        return;
    }

    if (length > 64) {
        alert("Password length must be at most 64 characters.");
        return;
    }

    let hasSpecialCharacters = confirm("Do you want to include special characters in your password?");
    let hasNumericCharacters = confirm("Do you want to include numeric characters in your password?");
    let hasLowercaseCharacters = confirm("Do you want to include lowercase characters in your password?");
    let hasUppercaseCharacters = confirm("Do you want to include uppercase characters in your password?");

    if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercaseCharacters && !hasUppercaseCharacters) {
        alert("Must select at least one character type.");
        return;
    }

    let passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowercaseCharacters: hasLowercaseCharacters,
        hasUppercaseCharacters: hasUppercaseCharacters
    }

    return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];

    return randomElement;
}





// Function to generate password with user input
function generatePassword() {
    let options = getPasswordOptions();
    console.log(options);
    let result = []

    let possibleCharacters = []

    let guaranteedCharacter = []

    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacter.push(getRandom(specialCharacters))
    }

    if (options.hasLowercaseCharacters) {
        possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
        guaranteedCharacter.push(getRandom(lowercaseCharacters))
    }

    if (options.hasUppercaseCharacters) {
        possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
        guaranteedCharacter.push(getRandom(uppercaseCharacters))
    }

    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacter.push(getRandom(numericCharacters))
    }

    for (let index = 0; index < options.length; index++) {
        var generated = getRandom(possibleCharacters);
        console.log(generated)
        result.push(generated);

    }
    console.log(result);

    return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
