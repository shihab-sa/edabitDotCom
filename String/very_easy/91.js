// Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

// Examples
// replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

// replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

// replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"
// Notes
// All characters will be in lower case.

function replaceVowels(str, char) {
  // Define a string to store the result
  let result = "";

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    // Check if the current character is a vowel (a, e, i, o, u)
    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      // If it's a vowel, add the specified character to the result string
      result += char;
    } else {
      // If it's not a vowel, add the current character to the result string
      result += currentChar;
    }
  }

  // Return the final result
  return result;
}

// Test cases
console.log(replaceVowels("the aardvark", "#")); // Output: "th# ##rdv#rk"
console.log(replaceVowels("minnie mouse", "?")); // Output: "m?nn?? m??s?"
console.log(replaceVowels("shakespeare", "*")); // Output: "sh*k*sp**r*"
