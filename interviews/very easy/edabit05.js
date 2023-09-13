// Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"

// removeNumbers("12ma23tt") ➞ "matt"

// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function removeNumbers(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 1 && str[i] <= 9) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(removeNumbers("e1d2a3b4i5t6"));
console.log(removeNumbers("mubashir1"));
