// Define arrays of special characters, numbers, uppercase letters, and lowercase letters
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

// Variable to store password length
var passwordLength;
var lowercase;
var uppercase;
var num;
var special;
var options = [];

// Write the generatePassword() function
function generatePassword() {
  // Asks the user how many characters they want
  passwordLength = prompt("How many characters would you like your password to be?")
  // Asking lowercase letters
  lowercase = confirm("Do you want to add lowercase letters?");
  // Asking uppercase letters
  uppercase = confirm("Do you want to add uppercase letters?");
  // Asking numbers
  num = confirm("Do you want to add numbers?");
  // Asking special characters
  special = confirm("Do you want to add special characters?");
  // You will need a password length of of at least 8 characters, and no more than 128 characters - how to turn a string type into a number type?
  if (passwordLength < 8) {
    // Validation that the correct number is chosen - the user should not be allowed to choose less than 8 characters
    alert("Your password must be at least 8 characters long");
  } else if (passwordLength > 128) {
    // Validation that the correct number is chosen - the user should not be allowed to choose more than 128 characters
    alert("Your password cannot contain more than 128 characters");
  } else {
    alert("Your new password has been created!");
  }
  // math.random will need to be used -- research Math object and how to have random return an integer (hint: needed for index) (hint: the .length method can be used to determine the number of random choices) 

  
  // Variable to store all data types chosen
  
  // Use logic to verify at least one character type is chosen

  // Use logic to assign character types based on boolean value returned

  // You will need the user to choose character types - what type of built-in prompt returns a boolean value?
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Calls generatePassword(); and returns the finished password
  var password = generatePassword();
  // Attatches the password to the page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
