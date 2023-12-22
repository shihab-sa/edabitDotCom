function wordToNumber(word) {
  const wordsArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  const index = wordsArray.indexOf(word);
  
  return index !== -1 ? index : -1;
}

// Examples
console.log(wordToNumber("one"));   // Output: 1
console.log(wordToNumber("two"));   // Output: 2
console.log(wordToNumber("nine"));  // Output: 9
console.log(wordToNumber("invalid")); // Output: -1
