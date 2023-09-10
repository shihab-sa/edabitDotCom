// Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
// isLastCharacterN("Aiden") ➞ true

// isLastCharacterN("Piet") ➞ false

// isLastCharacterN("Bert") ➞ false

// isLastCharacterN("Dean") ➞ true
// Notes
// The function must return a boolean value ( i.e. true or false).

// function isLastCharacterN(str) {
//   return str.endsWith("n");
// }

// console.log(isLastCharacterN("Aiden"));
// console.log(isLastCharacterN("Piet"));
// console.log(isLastCharacterN("Bert"));

function isLastCharacterN(str) {
  if (str.length > 0) {
    return str.slice(-1) === "n";
  } else {
    return false;
  }
}

console.log(isLastCharacterN("Aide"));
