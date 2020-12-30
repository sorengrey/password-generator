
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerical = "0123456789"
var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='"

// The alert that greets the user
var greetings = alert("Welcome! Please click OK to get started.");

// The prompt that gets the number of characters
var pwLength = prompt("Please enter a password length between 8 and 128 characters.")
while (isNaN(pwLength) || pwLength <= 7 || pwLength >= 129){
 // The validation alert 
    pwLength = alert("Please enter a number between 8 and 128.")
}

// The confirmation that asks about lowercase letters  
var lowCase = confirm("Would you like to use lowercase letters?")

// The prompt that asks if they want uppercase letters
var upCase = confirm("Would you like to use uppercase letters?")

// The prompt that asks if they want numbers
var numCase = confirm("Would you like to use numbers?")

// The prompt that asks if they want special characters
var symCase = confirm("Would you like to use special characters?")

// The password generator function -- needs if statements -- saved from the old version, not working!
/* function generatePassword() {
    var returnedPw = " "
    for (var i = 0, n = lowercase.length; i < pwLength; ++i) {
        returnedPw += lowercase.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw; */