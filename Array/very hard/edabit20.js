// Can You Make the Numbers?
// You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:

// can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])
// Write a function that returns true if you can build the following numbers using only the digits you have.

// Examples
// canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) ➞ true

// // You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
// // Using only these digits, you can build 123, 444, and 92

// canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) ➞ false

// canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []) ➞ true

// canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3]) ➞ false
// Notes
// N/A

function canBuild(digitsAvailable, numbersToBuild) {
  // Create an array to keep track of the count of each digit available.
  const counts = Array(10).fill(0);

  // Count the number of each digit available.
  for (let i = 0; i < 10; i++) {
    counts[i] = digitsAvailable[i];
  }

  // Helper function to check if a number can be constructed from available digits.
  function canConstructNumber(number) {
    const numberDigits = number.toString().split("").map(Number);

    for (const digit of numberDigits) {
      if (counts[digit] === 0) {
        return false; // Not enough of this digit available.
      }
      counts[digit]--; // Use one of the available digits.
    }

    return true; // All digits of the number can be constructed.
  }

  // Check if all numbers can be constructed.
  for (const number of numbersToBuild) {
    if (!canConstructNumber(number)) {
      return false; // Cannot construct this number.
    }
  }

  return true; // All numbers can be constructed.
}

// Test cases
console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // true
console.log(
  canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])
); // false
console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])); // true
console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3])); // false
