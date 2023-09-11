// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.


function getLength(arr) {
  let count = 0;

  function countNonNestedItems(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        countNonNestedItems(item); // Recursively explore nested arrays
      } else {
        count++; // Count non-nested items
      }
    }
  }

  countNonNestedItems(arr);
  return count;
}

// Test cases
console.log(getLength([1, [2, 3]])); // ➞ 3
console.log(getLength([1, [2, [3, 4]])); // ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]])); // ➞ 6
console.log(getLength([1, [2], 1, [2], 1])); // ➞ 5
console.log(getLength([])); // ➞ 0 (empty array)

