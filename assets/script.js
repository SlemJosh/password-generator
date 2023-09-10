//First Step for this refactor is to write out some pseudocode so I can have steps to follow in order to complete the page.
//These are mostly taken directly from the Challenge page
// Basic Outline.  Each step will actually have varying steps underneath them.  As we provide options, we need to build our app to know what those choices are, and also have a way of using them.  
// Step 1 - User will click the button
// So as we start, and click the button, nothing happens.  The code that was given to us is for the button to start the prompts, but we have no prompts.
// Step 2 - A series of Prompts will appear to the user.
// 
// Step 3 - First prompt asks how many characters they'd like the password to be.  At least 8 and no more than 128 characters are their limits.
// 
// Step 4 - Second prompt asks if they would like lowercase letters included. This is a yes or no answer.  
// Step 5 - Third prompt asks if they would like uppercase letters included.  This is is yes or no answer.
// Step 6 - Fourth prompt asks if they would like any numbers included. This is a yes or no answer.
// Step 7 - Fifth prompt asks if they would like special characters in their password. This is a yes or no question.
// Step 8 - Once all prompts have been answered a password should be generated based upon their answers.  This can be either displayed in the box on the page, or given in a prompt.  On the box probably better, so they can copy it.

// Start of our coding.
// I decided to start with declaring variables.  I'm going to ask the user to use them, figured I might as well declare them first and foremost.

// Lets test some variables.
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'.split('')]; //picked this up in Thursdays class.  
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]; //An interesting note, while this will allow us to more easily type out the array, when I did a console log of length, it still only showed it as one. So split might not work all the time.
var numeric = ['0123456789'.split('')];
var specialChar =['`','~','!','@','#','$','%','^','&','*','_','-','/','?',','];  //wanted to try a split, but because of special characters it seemed more complicated.
var possibleCharacters = [];  //This will be established based on our first prompt, and then made up based on the choices that the user inputs from the remaining prompts.

function generatePassword(){

// This is our first prompt to the user.  We want them to establish the length of the password.
// We create a new variable here, that didn't need to be defined, as it will instead just have parameters for which the user will chose.  We establish those paramets with our first if and else statements.
numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters and type it as a number. ex. 123");

// If there choice does not fall into the number paramater we outlined, we want to first give them a prompt to try again. If they fail the prompt, then we will display a message, and have them start the process over.
if(numberOfCharacters < 8 || numberOfCharacters > 128){
  numberOfCharacters = prompt("Please enter a number between 8 and 128.");
  generatePassword();
  //return "You must select the appropriate number of characters. Please start over.";
} 
// If there choice is not typed out the way we need it, we will give them a prompt asking one more time.  If they fail that prompt it will then display the error message, and ask them to start over.
else if (isNaN(numberOfCharacters)){ //isNaN lets us check to see if what they input was in number form.  I found on https://www.w3schools.com/jsref/jsref_isnan_number.asp .
  numberOfCharacters = prompt("Please enter in numerical value ex. 123.");
  generatePassword();
  }
// Now if they have entered a valid number in numerical form, we want to return something to them so they know they did it correctly.
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}

// Starting our 2nd prompt.  This will be the lowercase prompt.  Unlike the first, we just need a yes/no answer.
hasLowercase = confirm("Do you want your password to have lowercase characters? ex. abc");
if (hasLowercase) {
  alert("Your password WILL contain lowercase characters.");
}
else {
  alert("Your passworld will NOT contain lower case characters.")
}


// Starting our 3rd prompt.  This will be the uppercase prompt.  Just need a yes/no answer.
hasUppercase = confirm("Do you want your password to have uppercase characters? ex. ABC");
if (hasUppercase){
  alert("Your password WILL contain uppercase characters.");
}
else {
  alert("Your password will NOT contain uppercase characters.");
}

// Start of 4th prompt. Has numbers.  Just need a yes/no answer.
hasNumbers = confirm("Do you want your password to have numbers? ex.123")
if (hasNumbers){
  alert("Your password WILL contain numbers.");
}
else {
  alert("Your password will NOT contain numbers.");
}

// Start of 5th prompt. Has special characters.  Also just another Yes/No. 
hasSpecial = confirm("Do you want your password to have special characters? ex. %*!")
if (hasSpecial){
  alert("Your password WILL contain special characters.");
}
else {
  alert("Your password will NOT contain special characters.")
}

// Now we need to do some behind the scenes work.  We need to take all the answers to the previous prompt questions, and have them either added or left out of our final password.
// I went back and checked the specific requests on this program, and noted that they want at least one character type to be used.  So although I've already written the code for the math, I need to first validate
// that at least one type of of those prompts had a yes answer, or I need to have them start over.

// This is a pretty basic test.  We just need to make sure we have one true value of our previous statements.  So we can just say if they are all false, that it needs to start over and we give them another prompt.

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false){
   alert("You must select at least one character type for your password.");
   // Rather than just loop this back to the beginning. I thought it would be better to just populate the box, and they can start the process over with a new click. 
   return ("Your password must select confirm on at least one of the character options.\n Please Try Again");  //Added a linebreak using  \n 
}

// At this point if they made it past all the previous checks, we  need to start making that password.
// If they said they want lower case, we will then use the method of concat, which will join the strings without changing them.  So it's joining our strings possibleCharacters and the lowerCase.  Essentialy telling us that of the value
// that was given to us from the first prompt, we want it to include values from the lowercase variable options.  
if (hasLowercase){
  possibleCharacters = possibleCharacters.concat(lowerCase);
}
console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
// Checking for Upper Case
if (hasUppercase){
  possibleCharacters = possibleCharacters.concat(upperCase);
}
console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
// Checking for Numeric
if (hasNumbers){
  possibleCharacters = possibleCharacters.concat(numeric);
}
console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
// Checking for special characters.
if (hasSpecial){
  possibleCharacters = possibleCharacters.concat(specialChar);
}
console.log(possibleCharacters) // A test to make sure that our variable contains the included array.

/*
//   
let password = ""
for (let i = 0; i < numberOfCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
  password = password + possibleCharacters[rng];
}
return password;
*/
};



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

