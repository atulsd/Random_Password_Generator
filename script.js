// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLowerCase = "";
var passwordUpperCase = "";
var passwordNumeric = "";
var passwordSpecialCharacters = "";
var required = "";
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
    // alert("Result.length is: " + result.length);
    //   alert("Mask.length is:" + mask.length);
    //   alert("Displaying result: " + result + "Displaying Mask " + mask);
  }
  alert("we are Almost there mate");
  return result;
}

function prompts() {
  alert("Prompt function.");
  passwordLength = prompt(
    "Please choose length of your password.\n Enter a number between 8 - 128"
  );

  while (isNaN(passwordLength) || passwordLength < 9 || passwordLength > 128) {
    passwordLength = prompt(
      "Please choose length of your password.\n Enter a number between 8 - 128"
    );
  }

  passwordLowerCase = prompt(
    "What is your password character type: \n Do you want to include lowercase characters: \n Type Y for YES or  N for NO"
  );
  alert(passwordLowerCase);

  while (
    !(passwordLowerCase === ("y" || "Y") || passwordLowerCase === ("n" || "N"))
  ) {
    passwordLowerCase = prompt(
      "What is your password character type: \n Do you want to include lowercase characters: \n Type Y for YES or  N for NO"
    );
    alert("Inside while for password lower case if yes: " + passwordLowerCase);
    if (passwordLowerCase === ("y" || "Y")) {
      required = "a";
      alert("Mil gaya a");
    }
  }

  passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );
  if (passwordUpperCase === ("y" || "Y")) {
    required += "A";
  }
  passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );
  if (passwordNumeric === ("y" || "Y")) {
    required += "#";
  }
  passwordSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
  if (passwordSpecialCharacters === ("y" || "Y")) {
    required += "!";
  }
  alert("Password length is " + passwordLength + " Required is: " + required);

  para.passwordLength = passwordLength;
  para.required = required;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
