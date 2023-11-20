// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Examples
// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"
// Notes
// The input is always a valid word.

function newWord(str) {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }

  return newStr;
}

console.log(newWord("apple"));
