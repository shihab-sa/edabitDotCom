// Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
// findLargestNum([4, 5, 1, 3]) ➞ 5

// findLargestNum([300, 200, 600, 150]) ➞ 600

// findLargestNum([1000, 1001, 857, 1]) ➞ 1001
// Notes
// Expect either a positive number or zero (there are no negative numbers).
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function findLargestNum(arr) {
  if (arr.length === 0) return "arry is empty";
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(findLargestNum([4, 5, 1, 3]));
console.log(findLargestNum([300, 200, 600, 150]));
