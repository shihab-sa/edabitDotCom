// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
// intToString(4) ➞ "4"

// stringToInt("4") ➞ 4

// intToString(29348) ➞ "29348"
// Notes
// You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.


// Function to convert an integer to a string
function intToString(num) {
    if (num === 0) return "0";
    
    let isNegative = false;
    if (num < 0) {
      isNegative = true;
      num = -num;
    }
    
    let result = '';
    while (num > 0) {
      const digit = num % 10;
      result = String.fromCharCode(digit + 48) + result;
      num = Math.floor(num / 10);
    }
    
    return isNegative ? '-' + result : result;
  }
  
  // Function to convert a string to an integer
  function stringToInt(str) {
    let isNegative = false;
    let startIndex = 0;
    
    if (str[0] === '-') {
      isNegative = true;
      startIndex = 1;
    }
    
    let num = 0;
    for (let i = startIndex; i < str.length; i++) {
      const digit = str.charCodeAt(i) - 48;
      num = num * 10 + digit;
    }
    
    return isNegative ? -num : num;
  }
  
  // Test cases
  console.log(intToString(4));       // Output: "4"
  console.log(stringToInt("4"));     // Output: 4
  console.log(intToString(29348));   // Output: "29348"
  console.log(stringToInt("-42"));   // Output: -42
  