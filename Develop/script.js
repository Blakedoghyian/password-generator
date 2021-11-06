// Assignment code here

function generatePassword() {
  var length = window.prompt("How many characters would you like to include? 8-128 ");

  if (length > 128) {
    window.alert("Your password is too long!");
  } else if (length < 8) {
    window.alert("Your password is too short!");

  } else {


// prompt user for password criteria
// select length between 8 and 128 characters
// confirm whether or not to use lowercase, uppercase, numeric, and or special characters
  var confirmUpper = window.confirm("Include upper case letters?");
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var confirmLower = window.confirm("Include lower case letters?");
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var confirmNum = window.confirm("Include numbers?");
  var num = ["1","2","3","4","5","6","7","8","9","0"];
  var confirmSpecial = window.confirm("Include special characters?");
  var special = ["~", "!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","|",";",":","'","<",">","?","/"];
  var startpw = [];



// each answer should be validated and atleast one character type should be selected
  if (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSpecial === false) {
    window.alert("You must select a password criteria!");
  }

  if (confirmUpper === true) {
    startpw = startpw.concat(upper);
  }

  if (confirmLower === true) {
    startpw = startpw.concat(lower);
  }

  if (confirmNum === true) {
    startpw = startpw.concat(num);
  }

  if (confirmSpecial === true) {
    startpw = startpw.concat(special);
  }

  console.log(startpw);

// after answering all the prompts, password should be generated and displayed to the page
  return "Generated password will go here";
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
