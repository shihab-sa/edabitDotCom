function calculator(expression){
  

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
   console.log(parseInt(char));
  }
}

// Test cases
console.log(calculator("23+4")); // Output: 27


// parseInt()
// isNaN()
