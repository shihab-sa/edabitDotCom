// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
// firstLast("ganesh") ➞ "gh"

// firstLast("kali") ➞ "ki"

// firstLast("shiva") ➞ "sa"

// firstLast("vishnu") ➞ "vu"

// firstLast("durga") ➞ "da"
// Notes
// There is no empty string.

function firstLast(str) {
  let firstSingleChar = str[0];
  let lastSigChar = str[str.length - 1];
  return firstSingleChar.concat(lastSigChar);
}

console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));
console.log(firstLast("durga"));

// way 02

function firstLast(str) {
  if (str.length >= 2) {
    return str[0] + str[str.length - 1];
  } else {
    return str; // Return the string as is if it has only one character
  }
}

// Test cases
console.log(firstLast("ganesh")); // ➞ "gh"
console.log(firstLast("kali")); // ➞ "ki"
console.log(firstLast("shiva")); // ➞ "sa"
console.log(firstLast("vishnu")); // ➞ "vu"
console.log(firstLast("durga")); // ➞ "da"
