// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("45-15") ➞ 5

// calculator("49/7*2-3") ➞ 11




function calculator(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return "Invalid expression";
  }
}

// Example usages
console.log(calculator("23+4"));      // Output: 27
console.log(calculator("45-15"));     // Output: 30
console.log(calculator("13+2-5*2"));  // Output: 5
console.log(calculator("49/7*2-3"));  // Output: 11
