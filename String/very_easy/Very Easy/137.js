// Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

// Examples
// countUnique("apple", "play") ➞ 5
// // "appleplay" has 5 unique characters:
// // "a", "e", "l", "p", "y"

// countUnique("sore", "zebra") ➞ 7
// // "sorezebra" has 7 unique characters:
// // "a", "b", "e", "o", "r", "s", "z"

// countUnique("a", "soup") ➞ 5
// Notes
// Each word will contain at least one letter.
// All words will be lower cased.

function countUnique(str1, str2) {
  let concatTwoString = str1.concat(str2);
  let uniqueNumber = 0;
  let res = concatTwoString.split("");

  for (let i = 0; i < res.length; i++) {
    if (res[i] == res[i]) {
      uniqueNumber++;
    }
  }
  return uniqueNumber;
}

console.log(countUnique("apple", "play"));
