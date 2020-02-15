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
function randomString(length, chars) {
  alert("length is" + length + "Required" + chars);
  var mask = "";
  if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) mask += "0123456789";
  if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = length; i > 0; --i)
    result += mask[Math.floor(Math.random() * mask.length)];
  alert("we are Almost there mate");
  return result;
}

// alert(randomString(16, "aA"));
// alert(randomString(32, "#aA"));
//alert(randomString(10, "a#A!"));

var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumeric;
var passwordSpecialCharacters;
var required = "";

writePassword();

function generatePassword() {
  prompts(passwordLength, required);
  alert(
    "After prompts length is:" + passwordLength + " Required is: " + required
  );
  //return window.crypto.getRandomValues();
  var result = randomString(passwordLength, required);
  alert("Value inside generatePassword is:" + result);
  return result;

  // return (
  //   passwordLength +
  //   passwordLowerCase +
  //   passwordUpperCase +
  //   passwordNumeric +
  //   passwordSpecialCharacters
  // );
}

function prompts(passwordLength, required) {
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

  // alert(
  //   "Generating random Lower characters: " +
  //     Math.random()
  //       .toString(36)
  //       .replace(/[^a-z]+/g, "")
  //       .substr(0, passwordLength)
  // );
  // alert(
  //   "Generating random Upper characters: " +
  //     Math.random()
  //       .toString(36)
  //       .replace(/[^a-z]+/g, "")
  //       .substr(0, passwordLength)
  //       .toUpperCase()
  // );

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

  if (passwordLowerCase === "y" || "Y") {
    required = "a";
  }
  passwordUpperCase = prompt(
    "Do you want to include uppercase characters: \n Type Y for YES or  N for NO"
  );
  if (passwordUpperCase === "y" || "Y") {
    required += "A";
  }
  passwordNumeric = prompt(
    "Do you want to include numbers: \n Type Y for YES or  N for NO"
  );
  if (passwordNumeric === "y" || "Y") {
    required += "#";
  }
  passwordSpecialCharacters = prompt(
    "Do you want to include special characters: \n Type Y for YES or  N for NO"
  );
  if (passwordSpecialCharacters === "y" || "Y") {
    required += "!";
  }
  alert("Password length is " + passwordLength + " Required is: " + required);
  return passwordLength, required;
  //return generatePassword(passwordLength, required);
  //randomString(passwordLength, required);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
