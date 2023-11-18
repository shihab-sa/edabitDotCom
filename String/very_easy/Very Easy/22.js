// Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
// isLastCharacterN("Aiden") ➞ true

// isLastCharacterN("Piet") ➞ false

// isLastCharacterN("Bert") ➞ false

// isLastCharacterN("Dean") ➞ true
// Notes
// The function must return a boolean value ( i.e. true or false).

function isLastCharacterN(name) {
  // Check if the last character of the name is 'n'
  return name.charAt(name.length - 1).toLowerCase() === "n";
}

// Test cases
console.log(isLastCharacterN("Aiden")); // true
console.log(isLastCharacterN("Piet")); // false
console.log(isLastCharacterN("Bert")); // false
console.log(isLastCharacterN("Dean")); // true
