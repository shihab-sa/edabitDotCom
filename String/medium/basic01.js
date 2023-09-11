// অনেক সময়, মিথ্যার কন্ডিশন / লজিক / কিংবা ঘটনা লিখতে হয় ! return false করে দিতে হয় !

// আর বাকি else এ false করে দিতে হয় !

function testJackpot(resultArray) {
  // Check if the array has exactly 4 elements
  if (resultArray.length !== 4) {
    return false;
  }

  // Check if all elements are identical by comparing the m to the first element
  for (let i = 1; i < resultArray.length; i++) {
    if (resultArray[i] !== resultArray[0]) {
      return false;
    }
  }

  // If all elements are identical, return true
  return true;
}

// Test cases
console.log(testJackpot(["@", "@", "@", "@"])); // true
console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true
console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false
