// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// Examples
// hasSpaces("hello") ➞ false

// hasSpaces("hello, world") ➞ true

// hasSpaces(" ") ➞ true

// hasSpaces("") ➞ false

// hasSpaces(",./!@#") ➞ false
// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.

function hasSpaces(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      return true;
    }
  }
  return false;
}

// Test cases
console.log(hasSpaces("hello")); // ➞ false
console.log(hasSpaces("hello, world")); // ➞ true
console.log(hasSpaces(" ")); // ➞ true
console.log(hasSpaces("")); // ➞ false
console.log(hasSpaces(",./!@#")); // ➞ false
