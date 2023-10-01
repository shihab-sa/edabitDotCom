// Using the "&&" Operator
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.

// Examples
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false
// Notes
// N/A

// Note :

// == মানে 2 টায় সমান হতে হবে
// ===  মানে  2 টায় type of সমান
// &&  মানে 2 টায় এক হতে হবে

function and(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}

console.log(and(false, true)); //➞ false
console.log(and(true, true)); //➞ true
console.log(and(false, true)); //➞ false
console.log(and(false, false)); // ➞ false
