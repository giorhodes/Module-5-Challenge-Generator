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
    // Variable to store length of password from user output
    let length = parseInt(
        prompt("How many characters would you like your password to contain"))

    if (isNaN(length) == true) {
        alert("password length must be provided as number");
        return;

    }

    if (length < 10) {

        alert("Password length must be at less 10 characters ")
        return;
    }

    if (length > 64) {

        alert("Password length must be at less than 65 characters")
        return;
    }
}
let hasSpecialCharacters = confirm()

let hasNumericCharacters = confirm()

let hasLowercaseCharacters = confirm()

let hasUpperCaseCharacter = confirm()

if hasSpecialCharacters == false &&
    hasNumericCharacters &&
  == hasLowercaseCharacters && == hasUpperCaseCharacter { alert("Must select at least one character type") }

let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasUpperCased
hasLowercaseCharacters: hasLowercaseCharacters,
    hasNumericCharacters: hasNumericCharacters

}

console.log(passwordOptions);

return passwordOptions;



















// Function for getting a random element from an array
function getRandom(arr) {
    let randomindex = Math.floor(Math.random() * arr.length)
    let randomElement = arr[randomindex];

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
