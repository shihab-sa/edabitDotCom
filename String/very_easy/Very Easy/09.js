// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0
// Notes
// Check the Resources tab for info on recursion.

function length(str) {
  if (str.length === 0) {
    return;
  }

  return length(str.slice(1), str.length);
}

console.log(length("apple"));
