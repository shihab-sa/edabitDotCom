// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true


// function getLastItem(arr){
//     let result = arr[arr.length-1]

//     return result

// }

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));




function getLastItem(arr) {
    // Check if the array is not empty before accessing the last element
    if (arr.length > 0) {
      return arr[arr.length - 1]; // Access the last element using its index
    } else {
      return undefined; // Return undefined for an empty array
    }
  }
  
  // Test cases
  console.log(getLastItem([1, 2, 3])); // Output: 3
  console.log(getLastItem(["cat", "dog", "duck"])); // Output: "duck"
  console.log(getLastItem([true, false, true])); // Output: true
  console.log(getLastItem([])); // Output: undefined
  
