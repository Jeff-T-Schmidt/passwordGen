function generatePassword(lowerCase, upperCase, number, symbol, length) {}
    //TODO: your code goes here
    function getRandomLength () {
        passLength = prompt("Enter password length from 1 to 128 characters long.")

    }
    // if (passLength.length < 1){}
    // if (passLength.length >= 129) {}


    console.log(getRandomLength())
    function getRandomLower () {
        lowerCase = confirm("Do you want a lower case letter?");
        return String.fromCharCode(Math.floor(Math.random() * 26) +97);
    } 
    console.log(getRandomLower())     
    function getRandomUpper () {
        upperCase = confirm("Do you wwant an upper case letter?");
        return String.fromCharCode(Math.floor(Math.random() * 26) +65);
    }
    console.log(getRandomUpper()) 
    function getRandomNumber () {
        number = confirm("Do you want a number between 0 and 9?");
        return String.fromCharCode(Math.floor(Math.random() * 10) +48);
    }
    console.log(getRandomNumber()) 
    function getRandomSymbol () {
        symbol = confirm("Do you want to use a special character?");
        //Symbols taken from: https://owasp.org/www-community/password-special-characters
        var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    console.log(getRandomSymbol()) 

for (var i = 0; i <= passLength; i++) {
    var thing = math.floor(Math.random() *SOMETHING.length);
    passwordText += SOMETHING.substring(thing, thing + 1)
}


// if (lowerCase == true) {
//     password++;
// }if (upperCase == true) {
//     password++;
// }if (number == true) {
//     password++;
// }if (symbol == true)
//     password++;



// getRandomLength();
// getRandomLower();
// getRandomUpper();
// getRandomNumber();
// getRandomSymbol();





//When the user clicks the btn 'Generate pw' the user is prompted to input values for their pw criteria
// var passLength = 0
// passLength =prompt("Input values for pw length")
// console.log(passLength)

//User inputs their criteria: min/max of 8 - 128 characters

// ("Choose a length for your password between 8 and 128 characters")

//User inputs their criteria: lowercase letter

// ("Would you like to include lowercase letters?")
// var passLower = true
// passLower = confirm("Do you want the pw lowercase?")
// if (passLower) {
//     myString = myString + "abcdefghijklmnopqrstuvwxyz"
// }


    //If yes, add lowercase letters then move to next prompt
    //If no, proceed to next prompt

//User inputs their criteria: uppercase letter
// var passUpper = true
// passUpper = confirm("Do you want the pw uppercase?")
// if  (passUpper) {
//      myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// } 
// console.log(myString)

// ("Would you like to include uppercase letters?")

    //If yes, add uppercase letters then move to next prompt
    //If no, proceed to next prompt

//User inputs their criteria: numeric value

// ("Would you like to inlcude numbers?")

    //If yes, add numbers then move to next prompt
    //If no, proceed to next prompt

//User inputs their criteria: and/or special characters

// ("Would you like to include any special characters?")

    //If yes, add special characters then move to validate
    //If no, proceed to validate

//validate each input

//all prompts must be answered

//pw should generate based on the above criteria

//pw should display in an alert or written to the page


  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
   // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

