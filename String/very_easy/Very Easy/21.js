// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

function hasSpaces(inputString) {
  // Check if the input string is not empty
  if (inputString.length > 0) {
    // Loop through each character in the string
    for (let i = 0; i < inputString.length; i++) {
      // Check if the current character is a space
      if (inputString[i] === " ") {
        // Return true if a space is found
        return true;
      }
    }
  }
  // Return false if no spaces are found or if the input string is empty
  return false;
}

// Test cases
console.log(hasSpaces("hello")); // ➞ false
console.log(hasSpaces("hello, world")); // ➞ true
console.log(hasSpaces(" ")); // ➞ true
console.log(hasSpaces("")); // ➞ false
console.log(hasSpaces(",./!@#")); // ➞ false
