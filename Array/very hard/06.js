// Mutations Only: Zeroes to the End
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Examples
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

// zeroesToEnd([0, 0]) ➞ [0, 0]
// Notes
// You must mutate the original array.
// Keep the relative order of the non-zero elements the same.

function zeroesToEnd(arr) {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[right] !== 0) {
      // Swap non-zero element with the leftmost zero found so far
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }

  return arr;
}
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // ➞ [1, 2, 4, 5, 0, 0, 0]
console.log(zeroesToEnd([0, 0, 2, 0, 5])); // ➞ [2, 5, 0, 0, 0]
console.log(zeroesToEnd([4, 4, 5])); // ➞ [4, 4, 5]
console.log(zeroesToEnd([0, 0])); // ➞ [0, 0]
