// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.

function toNumberArray(arr) {
  let newNumberArr = [];
  for (let i = 0; i < arr.length; i++) {
    newNumberArr.push(parseFloat(arr[i]));
  }
  return newNumberArr;
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));

// WAY 02

function toNumberArray(strArray) {
  return strArray.map((str) => parseFloat(str));
}

// Test cases
const result1 = toNumberArray(["9.4", "4.2"]);
console.log(result1); // Output: [9.4, 4.2]

const result2 = toNumberArray(["91", "44"]);
console.log(result2); // Output: [91, 44]

const result3 = toNumberArray(["9.5", "8.8"]);
console.log(result3); // Output: [9.5, 8.8]
