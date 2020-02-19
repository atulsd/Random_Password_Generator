// Assignment Code

var generateBtn = document.querySelector("#generate");
//should containLowerCase
//containUpperCase
var passwordLength;
var passwordLowerCase = "";
var passwordUpperCase = "";
var passwordNumeric = "";
var passwordSpecialCharacters = "";
var required = "";
var optionSelected = 0;
var para = { passwordLength: 0, required: "" };

writePassword();

function generatePassword() {
  prompts();

  var mask = "";
  if (para.required.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
  if (para.required.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (para.required.indexOf("#") > -1) mask += "0123456789";
  if (para.required.indexOf("!") > -1)
    mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";

  var result = "";
  for (var i = para.passwordLength; i > 0; --i) {
    result += mask[Math.floor(Math.random() * mask.length)];
  }
  return result;
}

function prompts() {
  para.passwordLength = 0;
  para.required = "";
  required = "";
  optionSelected = 0;

  passwordLength = prompt(
    "Please choose length of your password.\n Enter a number between 8 - 128"
  );

  while (isNaN(passwordLength) || passwordLength < 9 || passwordLength > 128) {
    passwordLength = prompt(
      "Please choose length of your password.\n Enter a number between 8 - 128"
    );
  }

  passwordLowerCase = prompt(
    "What is your password character type: \n You need to select atleast one of the options \nDo you want to include lowercase characters: \n Type Y for YES or  N for NO"
  );

  if (passwordLowerCase.toLowerCase() === "y") {
    required = "a";
    optionSelected++;
  }

  while (
    !(
      passwordLowerCase.toLowerCase() === "y" ||
      passwordLowerCase.toLowerCase() === "n"
    )
  ) {
    passwordLowerCase = prompt(
      "\n Do you want to include lowercase characters: \n Please Type Y for YES or  N for NO"
    );
    if (passwordLowerCase.toLowerCase() === "y") {
      required = "a";
      optionSelected++;
    }
  }

  passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );

  if (passwordUpperCase.toUpperCase() === "Y") {
    required += "A";
    optionSelected++;
  }

  while (
    !(
      passwordUpperCase.toUpperCase() === "Y" ||
      passwordUpperCase.toUpperCase() === "N"
    )
  ) {
    passwordUpperCase = prompt(
      "Do you want to include uppercase characters: \n Please Type Y for YES or  N for NO"
    );
    if (passwordUpperCase.toUpperCase() === "Y") {
      required += "A";
      optionSelected++;
    }
  }

  passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );

  if (passwordNumeric.toLowerCase() === "y") {
    required += "#";
    optionSelected++;
  }

  while (
    !(
      passwordNumeric.toLowerCase() === "y" ||
      passwordNumeric.toLowerCase() === "n"
    )
  ) {
    passwordNumeric = prompt(
      "Do you want to include numbers: \n Please Type Y for YES or  N for NO"
    );
    if (passwordNumeric.toLowerCase() === "y") {
      required += "#";
      optionSelected++;
    }
  }

  passwordSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
  if (passwordSpecialCharacters.toLowerCase() === "y") {
    required += "!";
    optionSelected++;
  }

  while (
    !(
      passwordSpecialCharacters.toLowerCase() === "y" ||
      passwordSpecialCharacters.toLowerCase() === "n"
    )
  ) {
    passwordSpecialCharacters = prompt(
      "Do you want to include numbers: \n Please Type Y for YES or  N for NO"
    );
    if (passwordSpecialCharacters.toLowerCase() === "y") {
      required += "!";
      optionSelected++;
    }
  }

  while (optionSelected == 0) {
    passwordSpecialCharacters = prompt(
      "You have not selected any option: \n You have to include atleast one option \n Please Type Y for YES to include special characters"
    );
    if (passwordSpecialCharacters.toLowerCase() === "y") {
      required += "!";
      optionSelected++;
    }
  }

  para.passwordLength = passwordLength;
  para.required = required;
}

// Write password to the #password input
function writePassword() {
  //changeText();
  //document.getElementById("password").innerHTML = "red";
  var passwordText = "";
  var password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function changeText() {
//document.querySelector("#password", "red");
// var disp = document.querySelector("wrapper");
// alert(disp.lastElementChild);
// disp.innerText = "sfasfsaf";
// disp.innerHTML = "innerhtml";

// document.onclick("password");
// document
// .getElementsByTagName("textarea")
// .setAttribute("placeholder", "facebook.jpeg");
//alert("in here");
// }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
