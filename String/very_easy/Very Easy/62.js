// Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

// Examples
// calculate(4, 9, "+") ➞ 13

// calculate(12, 5, "-") ➞ 7

// calculate(6, 3, "*") ➞ 18

// calculate(25, 5, "/") ➞ 5

// calculate(14, 3, "%") ➞ 2
// Notes
// Numbers can be negative.
// The only operations used are those in the examples above.

function calculate(num1, num2, ope) {
  switch (ope) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
  }
}

console.log(calculate(4, 9, "+"));
console.log(calculate(12, 5, "-"));
console.log(calculate(6, 3, "*"));
console.log(calculate(25, 5, "/"));
console.log(calculate(14, 3, "%"));
