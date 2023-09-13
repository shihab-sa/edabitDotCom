// AND, OR and NOT
// You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.

// Examples
// AND(1, 1) ➞ 1
// AND(0, 0) ➞ 0

// OR(1, 0) ➞ 1
// OR(1, 1) ➞ 1

// NOT(0) ➞ 1
// NOT(1) ➞ 0
// Notes
// // Check the Resources tab for some help.

// AND gate
function AND(a, b) {
  return a && b;
}

// OR gate
function OR(a, b) {
  return a || b;
}

// NOT gate
function NOT(a) {
  return !a;
}

// Test cases
console.log(AND(1, 1)); // Output: 1
console.log(AND(0, 0)); // Output: 0
console.log(OR(1, 0)); // Output: 1
console.log(OR(1, 1)); // Output: 1
console.log(NOT(0)); // Output: 1
console.log(NOT(1)); // Output: 0

// logiacl OR Not

function NOT(a) {
  return !a;
}
