let generateBtn = document.querySelector("#generate");

// Arrays for different types of characters.
let numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "@", "^","_", "~", "|", "{", "}" ];

// fuction to initiate the prompt command to check how many characters will be used to generate the password.
function generatePassword() {
  let passSize = prompt("How many characters would you like to generate in your password? ");
  console.log(passSize);

  //Condition "if" statment to make sure the password will have 8 to 128 characters. 
    if (passSize>7 && passSize<129) {
      alert("Your password will contain "+ passSize +" characters.");

      //Box to respond the desired type of characters to be used.   
      let upCase = confirm("Would you like to have Uppercase characters?");
      let loCase = confirm("Would you like to have Lowercase characters?");
      let numCase = confirm("Would you like to have Numerical characters?");
      let spcCase = confirm("Would you like to have Especial characters?");

      let Allchars = []; 

      //if statments to concatenate the desired types of characters in a new array "Allchars".
      if (upCase===true){ Allchars = Allchars.concat(upperChar)}
      if (loCase===true){ Allchars = Allchars.concat(lowerChar)}
      if (numCase===true){ Allchars = Allchars.concat(numericalChar)}
      if (spcCase===true){ Allchars = Allchars.concat(specialChar)}

//New array to input the random character selected in the loop.
let passwordChar=[]

// "for" loop to generate the a random index number.
    for (let index = 0; index < passSize; index++) {
     let  i = Math.floor(Math.random() * Allchars.length);
passwordChar.push(Allchars[i])    //Push the index number obtained as a position in the array with all types of selected characters.
    
      console.log(passwordChar)
      
    }
// Convert the values in the array with the generated password (passwordChar) into a string.
    return passwordChar.join("")
  } else {alert("The Password must contain 8 to 128 characters"); //Alert in case of selecting an invalid number of characters.
          generatePassword();}
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
