// Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.

// Examples
// removeFirstLast("hello") ➞ "ell"

// removeFirstLast("maybe") ➞ "ayb"

// removeFirstLast("benefit") ➞ "enefi"

// removeFirstLast("a") ➞ "a"
// Notes
// If the string is 2 or fewer characters long, return the string itself (See Example #4).

function removeFirstLast(str) {
  if (str.length <= 2) return str;
  let newStr = "";
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i];
  }

  return newStr;
}

console.log(removeFirstLast("hello"));
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("benefit"));
console.log(removeFirstLast("a"));
