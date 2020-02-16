// Assignment Code

var generateBtn = document.querySelector("#generate");
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
  //alert("we are Almost there mate");
  return result;
}

function prompts() {
  //alert("Prompt function.");
  para.passwordLength = "";
  para.required = "";
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
  //alert(passwordLowerCase);

  if (passwordLowerCase === "y" || passwordLowerCase === "Y") {
    required = "a";
    optionSelected++;
    //alert("Mil gaya a");
  }

  // while (
  //   !(passwordLowerCase === ("y" || "Y") && passwordLowerCase === ("n" || "N"))
  // ) {
  //   passwordLowerCase = prompt(
  //     "What is your password character type: \n Do you want to include lowercase characters: \n Type Y for YES or  N for NO"
  //   );
  //   alert("Inside while for password lower case if yes: " + passwordLowerCase);
  //   if (passwordLowerCase === "y" || passwordLowerCase === "Y") {
  //     required = "a";
  //     alert("Mil gaya a");
  //   }
  // }

  passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );
  //alert(passwordUpperCase);

  if (passwordUpperCase === "y" || passwordUpperCase === "Y") {
    //  alert("Inside if");
    required += "A";
    optionSelected++;
  }
  // else{
  // do {
  //   passwordUpperCase = prompt(
  //     "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  //   );
  //   if (passwordUpperCase === ("y") ||passwordUpperCase === ("Y")) {
  //     alert("Inside if");
  //     required += "A";
  //   }
  //   // alert("Inside while for password upper case if yes: " + passwordUpperCase);
  // } while (
  //   !(passwordUpperCase === ("y" || "Y") || passwordUpperCase === ("n" || "N"))
  // )

  passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );

  // while (
  //   !(passwordNumeric === ("y" || "Y") || passwordNumeric === ("n" || "N"))
  // ) {
  //   passwordNumeric = prompt(
  //     "Do you want to include numbers: \n Type Y for YES or  N for NO"
  //   ); // alert("Inside while for password upper case if yes: " + passwordUpperCase);
  // }

  if (passwordNumeric === "y" || passwordNumeric === "Y") {
    required += "#";
    optionSelected++;
  }

  passwordSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
  while (optionSelected == 0) {
    passwordSpecialCharacters = prompt(
      "You have not selected any option: \n You have to include atleast one option \n Type Y for YES to include special characters"
    );
    if (
      passwordSpecialCharacters === "y" ||
      passwordSpecialCharacters === "Y"
    ) {
      required += "!";
      optionSelected++;
    }
  }

  if (passwordSpecialCharacters === "y" || passwordSpecialCharacters === "Y") {
    required += "!";
  }
  alert(
    "Password length is " +
      passwordLength +
      " Required is: " +
      required +
      "Option Slected is: " +
      optionSelected
  );

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
