// Count the Capital Letters
// Given a string of letters, how many capital letters are there?

// Examples
// capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
// Notes
// N/A

function capitalLetters(str) {
  let capCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      capCount++;
    }
  }

  return capCount;
}

console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));
