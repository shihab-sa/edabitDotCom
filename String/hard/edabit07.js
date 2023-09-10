// Double Character Swap
// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"
// Notes
// Both characters will show up at least once in the string.

function doubleSwap(str, c1, c2) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      result += c2;
    } else if (str[i] === c2) {
      result += c1;
    } else {
      result += str[i];
    }
  }

  return result;
}

// Test cases
console.log(doubleSwap("aabbccc", "a", "b")); // ➞ "bbaaccc"
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")); // ➞ "random w&rds writt#n h#r#"
console.log(doubleSwap("128 895 556 788 999", "8", "9")); // ➞ "129 985 556 799 888"
