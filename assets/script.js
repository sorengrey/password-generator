
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Clears the password if user clicks Generate Password multiple times
function clearIt(){
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", clearIt);

// The character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerical = "0123456789"
var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='"
var selected = ''
var returnedPw = ''

// The prompt that gets the number of characters - works, but needs to break after validation msg!
var pwLength = prompt("Please enter a password length between 8 and 128 characters.")
while (isNaN(pwLength) || pwLength <= 7 || pwLength >= 129){
 // The validation alert 
    pwLength = alert("Please enter a number between 8 and 128.")
}

// The confirmation that asks about lowercase letters
var lowCase = confirm("Would you like to use lowercase letters?")
    if(lowCase){
   selected = selected.concat(lowercase);
 }

// The prompt that offers uppercase letters
var upCase = confirm("Would you like to use uppercase letters?")
    if(upCase){
    selected = selected.concat(uppercase);
}

// The prompt that offers numbers
var numCase = confirm("Would you like to use numbers?")
    if(numCase){
    selected = selected.concat(numerical);
}

// The prompt that offers special characters
var symCase = confirm("Would you like to use special characters?")
    if(symCase){
    selected =selected.concat(specialChars);
}

 //The alert that tells the user to click the Generate Password button
var done = alert("All finished! Click Generate Password!")

// The password generator function - works, but needs to stop
 function generatePassword() {
    for (i = 0, n = selected.length; i < pwLength; ++i) {
         returnedPw += selected.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw;
 }
