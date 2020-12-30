
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
var greetings = alert("Welcome! Please click OK to get started.")

// The prompt that gets the number of characters
var pwLength = prompt("Please enter a password length between 8 and 128 characters.")
while (isNaN(pwLength) || pwLength <= 7 || pwLength >= 129){
   pwLength = prompt("Please enter a number between 8 and 128.")
}

// The prompt that asks if they want lowercase letters - logic needs work
var lowCase = prompt("Would you like to include lowercase letters? Yes/No")
while(lowCase != "yes" || (lowCase =! "no")){
    lowCase = prompt("Please enter yes or no.")
}

/*
// The prompt that asks if they want uppercase letters
var uppCase = prompt("Would you like to include uppercase letters? Yes/No")
while(uppCase === 'yes' || uppCase === 'no' || uppCase === 'Yes' || uppCase === 'No') {
}
if(uppCase !='yes' || uppCase !='no' || uppCase !='Yes' || uppCase !='No') {
    uppCase = prompt("Please enter yes or no.")
}


// The prompt that asks if they want numbers
var numCase = prompt("Would you like to include numbers? Yes/No")
while(numCase === 'yes' || numCase === 'no' || numCase === 'Yes' || numCase === 'No') {
}
if(numCase !='yes' || numCase !='no' || numCase !='Yes' || uppCase !='No') {
    numCase = prompt("Please enter yes or no.")
}

// The prompt that asks if they want special characters
var specCase = prompt("Would you like to include special characters? Yes/No")
while(specCase === 'yes' || specCase === 'no' || specCase === ('Yes') || specCase === ('No')) {
}
if(specCase !='yes' || specCase !='no' || specCase !='Yes' || specCase !='No') {
    specCase = prompt("Please enter yes or no.")
}
// The password generator function -- needs if statements -- saved from the old version, not working!
/* function generatePassword() {
    var returnedPw = " "
    for (var i = 0, n = lowercase.length; i < pwLength; ++i) {
        returnedPw += lowercase.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw; */