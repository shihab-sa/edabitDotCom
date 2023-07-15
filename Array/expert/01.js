// First Recurrence Index
// Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

// Examples
// recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// // D first appeared at index 0, resurfaced at index 3
// // T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

// recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

// recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

// recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

// recurIndex("") ➞ {}

// recurIndex(null) ➞ {}
// Notes
// You can solve this challenge via a recursive approach, alternatively.
// A recursive version of this challenge can be found here.




function recurIndex(str) {
    if (!str) {
      return {};
    }
  
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char]) {
        return { [char]: [charCount[char], i] };
      }
      charCount[char] = i;
    }
  
    return {};
  }
  
  // Example usages:
  console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
  console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
  console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
  console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
  console.log(recurIndex("")); // {}
  console.log(recurIndex(null)); // {}
  