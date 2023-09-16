// Free Coffee Cups
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Examples
// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

// totalCups(213) ➞ 248
// Notes
// Number of cups I bought + number of cups I got for free.
// Only valid inputs will be given.

function totalCups(numOfCup) {
  let theCup = numOfCup / 6;
  let toTTalCup = parseInt(theCup + numOfCup);
  return toTTalCup;
}

console.log(totalCups(6));
console.log(totalCups(12));
console.log(totalCups(213));
