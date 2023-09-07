//First Step for this refactor is to write out some pseudocode so I can have steps to follow in order to complete the page.
//These are mostly taken directly from the Challenge page
// Basic Outline.  Each step will actually have varying steps underneath them.  As we provide options, we need to build our app to know what those choices are, and also have a way of using them.  
// Step 1 - User will click the button
// Step 2 - A series of Prompts will appear to the user.
// Step 3 - First prompt asks how many characters they'd like the password to be.  At least 8 and no more than 128 characters are their limits.
// Step 4 - Second prompt asks if they would like lowercase letters included. This is a yes or no answer.  
// Step 5 - Third prompt asks if they would like uppercase letters included.  This is is yes or no answer.
// Step 6 - Fourth prompt asks if they would like any numbers included. This is a yes or no answer.
// Step 7 - Fifth prompt asks if they would like special characters in their password. This is a yes or no question.
// Step 8 - Once all prompts have been answered a password should be generated based upon their answers.  This can be either displayed in the box on the page, or given in a prompt.  On the box probably better, so they can copy it.

 



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
