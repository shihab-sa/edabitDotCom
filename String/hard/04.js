// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.



function reverseOdd(input) {
    const words = input.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length % 2 !== 0) {
        words[i] = words[i].split('').reverse().join('');
      }
    }
  
    return words.join(' ');
  }
  
  // Test cases
  console.log(reverseOdd("Bananas")); // Output: "sananaB"
  console.log(reverseOdd("One two three four")); // Output: "enO owt eerht four"
  console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
  // Output: "Make sure you only reverse words of odd length"
  