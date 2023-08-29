// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).

function charCount(countChar, str) {
  let tottalCharCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == countChar) {
      tottalCharCount++;
    }
  }
  return tottalCharCount;
}
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
