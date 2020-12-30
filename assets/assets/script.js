
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
//var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numerical = "0123456789"
var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='"
var charArr = [ ]
var returnedPw = ''

// The prompt that gets the number of characters
var pwLength = prompt("Please enter a password length between 8 and 128 characters.")
while (isNaN(pwLength) || pwLength <= 7 || pwLength >= 129){
 // The validation alert 
    pwLength = alert("Please enter a number between 8 and 128.")
}

// The confirmation that asks about lowercase letters
var lowCase = confirm("Would you like to use lowercase letters?")
 if(lowCase){
     charArr.push(lowercase);
 }

/* The prompt that asks if they want uppercase letters
var upCase = confirm("Would you like to use uppercase letters?")
if(lowCase){
    charArr.push(uppercase);
}


// The prompt that asks if they want numbers
var numCase = confirm("Would you like to use numbers?")
if(numCase){
    charArr.push(numerical);
}


// The prompt that asks if they want special characters
var symCase = confirm("Would you like to use special characters?")
if(symCase){
    charArr.push(specialChars);
}

*/
 //The alert that tells the user to click the Generate Password button
var done = alert("All finished! Click Generate Password!")

// The password generator function - saved from the old version - testing! */
 function generatePassword() {
    for (i = 0, n = charArr.length; i < pwLength; i++) {
       //returnedPw = (charArr[Math.floor(Math.random() * n)])
         returnedPw += charArr.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw;
 }
