// Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1

// word("two") ➞ 2

// word("nine") ➞ 9
// Notes
// All numbers will be single digit positive integers.

// function word(str) {
//   switch (str) {
//     case "one":
//       return 1;
//     case "two":
//       return 2;

//     default:
//       return "Not Found Any Number!";
//   }
// }

// console.log(word("one"));
// console.log(word("twos"));

// way 02

function wordToNumber(word) {
  const wordToNumberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

  // Convert the word to lowercase to ensure case-insensitivity
  const lowercasedWord = word.toLowerCase();

  // Check if the word exists in the map, and return the corresponding number
  if (lowercasedWord in wordToNumberMap) {
    return wordToNumberMap[lowercasedWord];
  } else {
    return "Invalid word";
  }
}

// Test cases
console.log(wordToNumber("one")); // ➞ 1
console.log(wordToNumber("two")); // ➞ 2
console.log(wordToNumber("nine")); // ➞ 9
console.log(wordToNumber("zero")); // ➞ 0
console.log(wordToNumber("eleven")); // ➞ "Invalid word"
