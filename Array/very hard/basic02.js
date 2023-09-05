function canBuild(digitsAvailable, numbersToBuild) {
  const counts = Array(10).fill(0);

  for (let i = 0; i < 10; i++) {
    ///counts[i] = digitsAvailable[i];
    console.log(counts[i]);
    console.log(digitsAvailable[i]);
    console.log(numbersToBuild[i]);
  }
}

// Test cases
console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // true
