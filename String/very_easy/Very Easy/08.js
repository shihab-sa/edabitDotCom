// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function isEmpty(str) {
  // Remove leading and trailing white spaces using trim()
  const trimmedStr = str.trim();

  // Check if the trimmed string has a length of 0
  return trimmedStr.length === 0;
}

// Test cases
console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // false
console.log(isEmpty("a")); // false
