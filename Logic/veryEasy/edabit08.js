// Arrow Functions
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.
// Tips
// Functions that consist only of a return can be written as a one-liner with an arrow function.

// For example, the code:

// function areSame(a, b) {
//     return a == b;
// }
// Can be simplified to:

// areSame = (a, b) => a == b;
// Bonus
// (a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().

// Notes
// This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
// Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.


const odd2 = (x)=> x + 2
const odd3 = (x)=> x + 3
const odd4 = (x)=> x + 4
const odd5 = (x)=> x + 5
const odd6 = (x)=> x + 6

console.log(odd2(2));
console.log(odd2(3));
console.log(odd2(4));
console.log(odd2(5));
console.log(odd2(6));
