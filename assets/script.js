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

//Start of our coding.
//We can see that in the code provided, we need to establish a generatePassword function to run in the function of writePassword which will will trigger when they push the button.
// This is our function for generating the password. We will fill this function with options as we move forwards.

// Lets test some variables.
var upperCase = ['A', 'B', 'C',];
console.log(upperCase);
console.log(upperCase.length);
/*
function generatePassword(){
var possibleCharacters = [];


/*
//This is our first prompt to the user.  We want them to establish the length of the password.
numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters.");
//We need options for their choices to the above. We need to first make sure that the way they chose is validated by us.  And we can select what we want to be valid.
//Lets start with make sure they select a range between what we gave them.
if(numberOfCharacters < 8 || numberOfCharacters > 128){
  return "Please enter a valid number of characters.";
} 
//What if they decide to try and use words instead of numerical keys.  It'll be easier for us if they just give us a number, vs trying to decipher a string.
else if (isNaN(numberOfCharacters)){ //isNaN lets us check to see if what they input was in number form.  I found on https://www.w3schools.com/jsref/jsref_isnan_number.asp .
  numberOfCharacters = prompt("Please enter in numerical value ex. 123.");
}
//Now if they have entered a valid number in numerical form, we want to return something to them so they know they did it correctly.
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
}
// Skipping ahead at first as we need to be able to finish the function, before providing more options.   
let password = ""
for (let i = 0; i < numberOfCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
  password = password + possibleCharacters[rng];
}
return password;
*/
/*};

/*
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
*/
