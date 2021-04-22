// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "|",
  "}",
  "~",
];

//Seeds password with 1 character of each requested type to ensure criteria are met
function seedString(p1, p2, p3, p4) {
  returnArray = [];
  if (p1) {
    //generate random integer between 0 and the max index in the array
    randNum = Math.floor(Math.random() * (lowercase.length - 1));
    returnArray.push(lowercase[randNum]);
  }

  if (p2) {
    randNum = Math.floor(Math.random() * (uppercase.length - 1));
    returnArray.push(uppercase[randNum]);
  }

  if (p3) {
    randNum = Math.floor(Math.random() * (numberArray.length - 1));
    returnArray.push(numberArray[randNum]);
  }

  if (p4) {
    randNum = Math.floor(Math.random() * (specialCharacters.length - 1));
    returnArray.push(specialCharacters[randNum]);
  }

  return returnArray;
}

//creates array of all requested character types to use in completion of password
function buildArray(p1, p2, p3, p4) {
  returnArray = [];
  if (p1) {
    //Append Array of Lowercase Cahracters
    returnArray = returnArray.concat(lowercase);
  }

  if (p2) {
    //Append Array of Uppercase Characters
    returnArray = returnArray.concat(uppercase);
  }

  if (p3) {
    //Append Array of numbers
    returnArray = returnArray.concat(numberArray);
  }

  if (p4) {
    //Append Array of special characters
    returnArray = returnArray.concat(specialCharacters);
  }

  return returnArray;
}

//generate remainder of password
function generatePassword(chars, array1, array2) {
  returnArray = array1;
  solutionArray = array2;

  //append items from solution array to returnArray until no required characters remain
  for (let i = chars; i > 0; i--) {
    //for all remaining characters, generate a random index and append corresponding item from solutionArray
    randNum = Math.floor(Math.random() * (solutionArray.length - 1));
    returnArray.push(solutionArray[randNum]);
  }

  return returnArray;
}

// Write password to the #password input
function writePassword() {
  //add variables to store prompted user input
  var numChars = prompt(
    "How Many Characters? (must be integer between 8 and 128"
  );

  /*Check to see if input # of characters is in range. If not, recusively call function to start again*/
  if (numChars >= 8 && numChars <= 128) {
    var includeLow = confirm(
      "Include at Least One Lowercase Character? Ok for Yes, Cancel for No"
    );
    var includeUp = confirm(
      "Include at Least One Uppercase Character? Ok for Yes, Cancel for No"
    );
    var includeNum = confirm(
      "Include at Least One Number? Ok for Yes, Cancel for No"
    );
    var includeSpec = confirm(
      "Include at Least One Special Character? Ok for Yes, Cancel for No."
    );

    //Seed initial String with 1 Instance of each type of special Character
    var initialString = seedString(
      includeLow,
      includeUp,
      includeNum,
      includeSpec
    );

    //Build an array of all data types requested for remaining password

    var possibleCharacters = buildArray(
      includeLow,
      includeUp,
      includeNum,
      includeSpec
    );

    //Calculate number of characters we still need to generate after initial seed
    var remainingChars = numChars - initialString.length;

    //generate remainder of password based on characters remaining, initial seed, and array of requested characters
    var password = generatePassword(
      remainingChars,
      initialString,
      possibleCharacters
    );

    console.log(password);

    var passwordText = document.querySelector("#password");

    //write result to window. Use .join() to remove commas between array elements
    passwordText.value = password.join("");
  } else {
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
