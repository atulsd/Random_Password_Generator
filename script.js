// Assignment Code

// var array = new Uint32Array(10);
// // var mixPass = {
// //   number: 12,
// //   lowerCaseCharacter: "adddd",
// //   upperCaseCharacter: "UUULKL",
// //   specialCharacters: "%$#&&"
// // };
// window.crypto.getRandomValues(array);

// alert("Your lucky numbers:");
// for (var i = 0; i < array.length; i++) {
//   alert(array[i]);
//   //  alert("Object is: " + mixPass.number);
// }

var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumeric;
var passwordSpecialCharacters;

writePassword();

function generatePassword() {
  prompts();
  //return window.crypto.getRandomValues();
  return (
    passwordLength +
    passwordLowerCase +
    passwordUpperCase +
    passwordNumeric +
    passwordSpecialCharacters
  );
}

function prompts() {
  alert("Prompt function.");
  passwordLength = prompt(
    "Please choose length of your password.\n Enter a number between 8 - 128"
  );

  // var randomNumberLength = Math.floor(
  //   Math.random() * Math.floor(passwordLength)
  // );

  // alert(randomNumberLength);

  // randomNumberLength = Math.random()
  //   .toString(36)
  //   .substring(7);
  // alert("Using substring: " + randomNumberLength);
  // // var array = new Uint32Array(randomNumberLength);

  // var randomValue = window.crypto.getRandomValues(
  //   new Uint32Array(passwordLength)
  // );

  // alert("Your lucky numbers:" + randomValue);

  alert(
    "Generating random Lower characters:" +
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, passwordLength)
  );
  // for (var i = 0; i < array.length; i++) {
  //   alert(array[i]);
  // }

  // alert(
  //   "New way:" +
  //     Math.random()
  //       .toString(36)
  //       .substr(2, 5) +
  //     "\n" +
  //     Math.random()
  //       .toString(36)
  //       .substr(2, 5)
  // );
  passwordLowerCase = prompt(
    "What is your password character type: \n Do you want to include lowercase characters: \n Type Y for YES or  N for NO"
  );

  passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );

  passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );

  passwordSpecialCharacters = prompt(
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
