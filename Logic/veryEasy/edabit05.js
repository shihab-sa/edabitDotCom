// Return Negative
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

// Examples
// returnNegative(4) ➞ -4

// returnNegative(15) ➞ -15

// returnNegative(-4) ➞ -4

// returnNegative(0) ➞ 0
// Notes
// N/A

function returnNegative(number) {
  if (number <= 0) {
    return number;
  } else {
    return -number;
  }
}

// Example usage:
console.log(returnNegative(4)); // Output: -4
console.log(returnNegative(15)); // Output: -15
console.log(returnNegative(-4)); // Output: -4
console.log(returnNegative(0)); // Output: 0
