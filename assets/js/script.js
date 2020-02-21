// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordLength;
var containLowerCase = "";
var containUpperCase = "";
var containNumeric = "";
var containSpecialCharacters = "";
var userSelectedInput = "";
var noOfOptionSelectedCounter = 0;
var randomPassword = { passwordLength: 0, userSelectedInput: "" };

writePassword();

function generatePassword() {
  prompts();

  var passwordGenerator = "";
  if (randomPassword.userSelectedInput.indexOf("a") > -1)
    passwordGenerator += "abcdefghijklmnopqrstuvwxyz";
  if (randomPassword.userSelectedInput.indexOf("A") > -1)
    passwordGenerator += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (randomPassword.userSelectedInput.indexOf("#") > -1)
    passwordGenerator += "0123456789";
  if (randomPassword.userSelectedInput.indexOf("!") > -1)
    passwordGenerator += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";

  var generatedPassword = "";
  for (var i = randomPassword.passwordLength; i > 0; --i) {
    generatedPassword +=
      passwordGenerator[Math.floor(Math.random() * passwordGenerator.length)];
  }
  return generatedPassword;
}

function prompts() {
  randomPassword.passwordLength = 0;
  randomPassword.userSelectedInput = "";
  userSelectedInput = "";
  noOfOptionSelectedCounter = 0;

  passwordLength = prompt(
    "Please choose length of your password.\n Enter a number between 8 - 128"
  );

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Please choose length of your password.\n Enter a number between 8 - 128"
    );
  }

  containLowerCase = prompt(
    "What is your password character type: \n You need to select atleast one of the options \nDo you want to include lowercase characters: \n Type Y for YES or  N for NO"
  );

  if (containLowerCase.toLowerCase() === "y") {
    userSelectedInput = "a";
    noOfOptionSelectedCounter++;
  }

  while (
    !(
      containLowerCase.toLowerCase() === "y" ||
      containLowerCase.toLowerCase() === "n"
    )
  ) {
    containLowerCase = prompt(
      "\n Do you want to include lowercase characters: \n Please Type Y for YES or  N for NO"
    );
    if (containLowerCase.toLowerCase() === "y") {
      userSelectedInput = "a";
      noOfOptionSelectedCounter++;
    }
  }

  containUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );

  if (containUpperCase.toUpperCase() === "Y") {
    userSelectedInput += "A";
    noOfOptionSelectedCounter++;
  }

  while (
    !(
      containUpperCase.toUpperCase() === "Y" ||
      containUpperCase.toUpperCase() === "N"
    )
  ) {
    containUpperCase = prompt(
      "Do you want to include uppercase characters: \n Please Type Y for YES or  N for NO"
    );
    if (containUpperCase.toUpperCase() === "Y") {
      userSelectedInput += "A";
      noOfOptionSelectedCounter++;
    }
  }

  containNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );

  if (containNumeric.toLowerCase() === "y") {
    userSelectedInput += "#";
    noOfOptionSelectedCounter++;
  }

  while (
    !(
      containNumeric.toLowerCase() === "y" ||
      containNumeric.toLowerCase() === "n"
    )
  ) {
    containNumeric = prompt(
      "Do you want to include numbers: \n Please Type Y for YES or  N for NO"
    );
    if (containNumeric.toLowerCase() === "y") {
      userSelectedInput += "#";
      noOfOptionSelectedCounter++;
    }
  }

  containSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
  if (containSpecialCharacters.toLowerCase() === "y") {
    userSelectedInput += "!";
    noOfOptionSelectedCounter++;
  }

  while (
    !(
      containSpecialCharacters.toLowerCase() === "y" ||
      containSpecialCharacters.toLowerCase() === "n"
    )
  ) {
    containSpecialCharacters = prompt(
      "Do you want to include special characters: \n Please Type Y for YES or  N for NO"
    );
    if (containSpecialCharacters.toLowerCase() === "y") {
      userSelectedInput += "!";
      noOfOptionSelectedCounter++;
    }
  }

  while (noOfOptionSelectedCounter == 0) {
    containSpecialCharacters = prompt(
      "You have not selected any option: \n You have to include atleast one option \n Please Type Y for YES to include special characters"
    );
    if (containSpecialCharacters.toLowerCase() === "y") {
      userSelectedInput += "!";
      noOfOptionSelectedCounter++;
    }
  }

  randomPassword.passwordLength = passwordLength;
  randomPassword.userSelectedInput = userSelectedInput;
}

// Write password to the #password input
function writePassword() {
  var passwordEl = document.querySelector("#password");
  passwordEl.value = "Your Secure Password is Being Generated";
  setTimeout(function() {
    var password = generatePassword();
    passwordEl.value = password;
  }, 500);
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
