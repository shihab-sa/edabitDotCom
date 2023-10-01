// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// function getFirstValue(arr){
//     return arr[0]
// }

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));

function getFirstValue(arr) {
  // Check if the array is not empty
  if (arr.length > 0) {
    // Return the first element
    return arr[0];
  } else {
    // Handle the case when the array is empty
    return "The array is empty";
  }
}

// Example usage:
console.log(getFirstValue([1, 2, 3])); // ➞ 1
console.log(getFirstValue([80, 5, 100])); // ➞ 80
console.log(getFirstValue([-500, 0, 50])); // ➞ -500
console.log(getFirstValue([0])); // ➞ "The array is empty"
