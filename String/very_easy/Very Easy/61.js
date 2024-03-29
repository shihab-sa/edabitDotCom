// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
// cleanUpArray(["8"]) ➞ [[8], []]

// cleanUpArray(["11"]) ➞ [[], [11]]

// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
// Notes
// All numbers will be positive integers.

function cleanUpArray(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }

  return [even, odd];
}

console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
