// Assignment Code

var generateBtn = document.querySelector("#generate");

writePassword();

function generatePassword() {
  prompts();
}

function prompts() {
  alert("Prompt function.");
  var passwordLength = prompt(
    "Please choose length of your password.\n Enter a number between 8 - 128"
  );
  var passwordLowerCase = prompt(
    "What is your password character type: \n Do you want to include lowercase characters: \n Type Y for YES or  N for NO"
  );

  var passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );

  var passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );

  var passwordSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
