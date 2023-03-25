// Minimum Steps to a Palindrome
// Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.

// Examples
// minPalindromeSteps("race") ➞ 3
// // Add 3 letters: "car" to make "racecar"

// minPalindromeSteps("mada") ➞ 1
// // Add 1 letter: "m" to make "madam"

// minPalindromeSteps("mirror") ➞ 3
// // Add 3 letters: "rim" to make "mirrorrim"
// Notes
// Trivially, words which are already palindromes should return 0.


// ============================  =way 01  ==================  

console.log('way 01 ')

function minPalindromeSteps(str) {
  let left = 0;
  let right = str.length - 1;
  let count = 0;
  
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      count++;
      right--;
    }
  }
  
  return count;
}
console.log(minPalindromeSteps("race"))
console.log(minPalindromeSteps("mada"))
console.log(minPalindromeSteps("mirror"));