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


// First Step for this refactor is to write out some pseudocode so I can have steps to follow in order to complete the page.
// These are mostly taken directly from the Challenge page
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

// Lets test some variables.  These were the original values I put for my variables, but for some reason couldn't get them to load right in the final stage.  Wanted to keep them here, so at a later date I can figure out how to improve it.  Commenting
// out for now.
/* var lowerCase = ['abcdefghijklmnopqrstuvwxyz'.split('')]; //picked this up in Thursdays class.  
   var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]; //An interesting note, while this will allow us to more easily type out the array, when I did a console log of length, it still only showed it as one. So split might not work all the time.
   var numeric = ['0123456789'.split('')];
   var specialChar =['`','~','!','@','#','$','%','^','&','*','_','-','/','?',','];  //wanted to try a split, but because of special characters it seemed more complicated.
*/

// For some reason, when I tried to use my variables above. The password at the end was not random, it was more or less unshuffled. So whenever it went to display 1 numeric value, it would instead show the entire array for that one value, and then 
// proceed to do the same for the rest. So a 12 letter password would all of a sudden take up like 40 characters.

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '/', '?', ','];

// Once we got done with the prompts, we needed a variable to store all the above variables into one long string, so that at the end we can just get a random sampling from it.

var possibleCharacters = [];

function generatePassword() {

  // This is our first prompt to the user.  We want them to establish the length of the password.
  // We create a new variable here, that didn't need to be defined, as it will instead just have parameters for which the user will chose.  We establish those paramets with our first if and else statements.
  numberOfcharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters and type it as a number. ex. 123");

  // If there choice does not fall into the number paramater we outlined, we want to first give them a prompt to try again. If they fail the prompt, then we will display a message, and have them start the process over.
  if (numberOfcharacters < 8 || numberOfcharacters > 128) {
    numberOfcharacters = prompt("Please enter a number between 8 and 128.");
    generatePassword();  // This essentially starts the program over, without them needing to click the button again.
  }
  // If there choice is not typed out the way we need it, we will give them a prompt asking one more time.  If they fail that prompt it will then display the error message, and ask them to start over.
  else if (isNaN(numberOfcharacters)) { //isNaN lets us check to see if what they input was in number form.  I found on https://www.w3schools.com/jsref/jsref_isnan_number.asp .
    numberOfcharacters = prompt("Please enter in numerical value ex. 123.");
    generatePassword();  // This essentially starts the program over, without them needing to click the button again.
  }
  // Now if they have entered a valid number in numerical form, we want to return something to them so they know they did it correctly.
  else {
    alert("Your password will be " + numberOfcharacters + " characters long.");
  }

  // Starting our 2nd prompt.  This will be the lowercase prompt.  Unlike the first, we just need a yes/no answer.
hasLowercase = confirm("Do you want your password to have lowercase characters? ex. abc \n OK for Yes. Cancel for No"); //So, I did some research on making custom prompt boxes. Feels like something we will cover later on in this class
  if (hasLowercase) {   // Basically we are saying if the value is True, aka the user selected Yes/OK, then we want to proceed this way.
    alert("Your password WILL contain lowercase characters.");
  }
  else {  // If the user was to click on Cancel/No, we want the value to be false, and render us a different output.
    alert("Your passworld will NOT contain lower case characters.");
  }


  // Starting our 3rd prompt.  This will be the uppercase prompt.  Just need a yes/no answer.
 hasUppercase = confirm("Do you want your password to have uppercase characters? ex. ABC \n OK for Yes. Cancel for No.");//Added line break in prompt
  if (hasUppercase) {
    alert("Your password WILL contain uppercase characters.");
  }
  else {
    alert("Your password will NOT contain uppercase characters.");
  }

  // Start of 4th prompt. Has numbers.  Just need a yes/no answer.
  hasNumbers = confirm("Do you want your password to have numbers? ex.123 \n OK for Yes. Cancel for No");//Added line break in prompt
  if (hasNumbers) {
    alert("Your password WILL contain numbers.");
  }
  else {
    alert("Your password will NOT contain numbers.");
  }

  // Start of 5th prompt. Has special characters.  Also just another Yes/No. 
  hasSpecial = confirm("Do you want your password to have special characters? ex. %*! \n OK for Yes. Cancel for No"); //Added line break in prompt
  if (hasSpecial) {
    alert("Your password WILL contain special characters.");
  }
  else {
    alert("Your password will NOT contain special characters.");
  }

  // Now we need to do some behind the scenes work.  We need to take all the answers to the previous prompt questions, and have them either added or left out of our final password.
  // I went back and checked the specific requests on this program, and noted that they want at least one character type to be used.  So although I've already written the code for the math, I need to first validate
  // that at least one type of of those prompts had a yes answer, or I need to have them start over.

  // This is a pretty basic test.  We just need to make sure we have one true value of our previous statements.  So we can just say if they are all false, that it needs to start over and we give them another prompt.

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    alert("You must select at least one character type for your password.");
    // Rather than just loop this back to the beginning. I thought it would be better to just populate the box, and they can start the process over with a new click. 
    return ("Your password must contain at least one of the character options.\n Please Try Again");  //Added a linebreak using  \n 
  }

  // At this point if they made it past all the previous checks, we  need to start making that password.
  // If they said they want lower case, we will then use the method of concat, which will join the strings without changing them.  So it's joining our strings possibleCharacters and the lowerCase.  Essentialy telling us that of the value
  // that was given to us from the first prompt, we want it to include values from the lowercase variable options.  

  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  // console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
  // Checking for Upper Case
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  // console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
  // Checking for Numeric
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }
  // console.log(possibleCharacters) // A test to make sure that our variable contains the included array.
  // Checking for special characters.
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialChar);
  }
  // console.log(possibleCharacters) // A test to make sure that our variable contains the included array.

  // Now we take all the above information and plug it into one last equation 

  let newPassword = ""                // Because we don't know if it will be just numbers or letters, we equate the password to a string.
  for (let i = 0; i < numberOfcharacters; i++) {    // How many characters did the user want.  We get that amount and set it = to the new variable result.   
    let result = [Math.floor(Math.random() * possibleCharacters.length)];  // Our result variable, which is a number of characters, we set it = to a random math operation of taking all our possible characters, and shuffling them.
    newPassword += possibleCharacters[result];  // Found the += https://www.w3schools.com/js/js_operators.asp.  Essentially making it so I didn't have to write password = password + possibleCharacters[rng].  
  }
  return newPassword;    //Return sends a message to the box.  We could also send the user a prompt, but if it's in the box, they can copy and paste it.
};