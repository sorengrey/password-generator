
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerical = "0123456789"
var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='"
var selected = ''
var returnedPw = ''

// offers lowercase letters
var lowCase = confirm("Would you like to use lowercase letters?")
    if(lowCase){
   selected = selected.concat(lowercase);
 }

// offers uppercase letters
var upCase = confirm("Would you like to use uppercase letters?")
    if(upCase){
    selected = selected.concat(uppercase);
}

// offers numbers
var numCase = confirm("Would you like to use numbers?")
    if(numCase){
    selected = selected.concat(numerical);
}

// offers special characters
var symCase = confirm("Would you like to use special characters?")
    if(symCase){
    selected = selected.concat(specialChars);
}

// tells the user they must select at least one character type - works, but needs to loop back to lowCase!
while(lowCase === false && upCase === false && numCase === false && symCase === false){
    var pickOne = alert("Please select at least one character type.")
}

// gets the number of characters - works, but needs to break after validation msg!
var pwLength = prompt("Please enter a password length between 8 and 128 characters.")
while (isNaN(pwLength) || pwLength <= 7 || pwLength >= 129){
 //  validation alert 
    alert("Please enter a number between 8 and 128.")
    pwLength = prompt("Please enter a password length between 8 and 128 characters.")
}

// tells the user to click the Generate Password button
var done = alert("All finished! Click Generate Password!")

// password generator function
 function generatePassword() {
    var returnedPw = ''
    for (i = 0, n = selected.length; i < pwLength; ++i) {
         returnedPw += selected.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw;
 }

