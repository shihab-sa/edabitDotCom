// Re-Form the Word
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

// Examples
// getWord("seas", "onal") ➞ "Seasonal"

// getWord("comp", "lete") ➞ "Complete"

// getWord("lang", "uage") ➞ "Language"
// Notes
// N/A

function getWord(str1, str2) {
  let str1First = str1[0].toUpperCase();
  let str1Slice = str1.slice(1);
  return `"${str1First}${str1Slice}${str2}"`;
}

console.log(getWord("seas", "onal"));
console.log(getWord("comp", "lete"));
console.log(getWord("lang", "uage"));
