function canBuild(digitsAvailable, numbersToBuild) {
  // Create an array to keep track of the count of each digit available.
  const counts = Array(10).fill(0);
  // Count the number of each digit available.
  for (let i = 0; i < 10; i++) {
    console.log(counts[i]);
    console.log(digitsAvailable[i]);
  }
}

// Test cases
console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // true
