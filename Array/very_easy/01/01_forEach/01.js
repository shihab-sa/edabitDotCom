// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

//   🍏 🍏 🍏 🍏 🍏 🍏 🍏 using only forEach() Methods    🍏 🍏 🍏 🍏 🍏 🍏

// 01

function getFirstValue(arr) {
  let element;
  arr.forEach((data, indx) => {
    if (indx === 0) {
      element = data;
    }
  });

  return element;
}

console.log(getFirstValue([1, 2, 3]));

// 02

function getFirstValue(arr) {
  let firstElement; // Initialize a variable to store the first element
  let found = false; // Initialize a flag to track if the first element has been found

  arr.forEach(function (element) {
    if (!found) {
      firstElement = element; // Set firstElement to the current element
      found = true; // Set the flag to true to indicate that the first element has been found
    }
  });

  return firstElement; // Return the first element
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 03

function getFirstValue(arr) {
  let firstElement = null; // Initialize a variable to store the first element

  arr.forEach(function (element) {
    if (firstElement === null) {
      firstElement = element; // Set firstElement to the current element if it's the first one encountered
    }
  });

  return firstElement; // Return the first element
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 04

function getFirstValue(arr) {
  const firstElementHolder = {}; // Create an object to hold the first element

  arr.forEach(function (element) {
    if (!("firstElement" in firstElementHolder)) {
      firstElementHolder.firstElement = element;
    }
  });

  return firstElementHolder.firstElement;
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 05

function getFirstValue(arr) {
  let firstElement; // Initialize a variable to store the first element

  arr.forEach(function (element) {
    firstElement = firstElement || element; // Set firstElement to the current element if it's not already set
  });

  return firstElement; // Return the first element
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 06

function getFirstValue(arr) {
  const result = []; // Initialize an empty array to hold the first element

  arr.forEach(function (element) {
    result[0] = element; // Set the first element in the result array
  });

  return result[0]; // Return the first element
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 07

function getFirstValue(arr) {
  let firstElement; // Initialize a variable to store the first element

  arr.forEach(function (element) {
    if (firstElement === undefined) {
      firstElement = element; // Set firstElement to the current element if it's not defined
    }
  });

  return firstElement;
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 08

function getFirstValue(arr) {
  let firstElement; // Initialize a variable to store the first element

  arr.forEach(function (element) {
    if (firstElement === undefined) {
      firstElement = element; // Set firstElement to the current element if it's not defined
      return; // Use a return statement to exit the loop early
    }
  });

  return firstElement; // Return the first element
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// 09

function getFirstValue(arr) {
  let firstElement;

  arr.forEach(function (element) {
    if (firstElement === undefined) {
      firstElement = element;
    }
  });

  return function () {
    return firstElement;
  };
}

// Test cases
console.log(getFirstValue([1, 2, 3])()); // Output: 1
console.log(getFirstValue([80, 5, 100])()); // Output: 80
console.log(getFirstValue([-500, 0, 50])()); // Output: -500

// 10

function getFirstValue(arr) {
  let firstElement;

  arr.forEach(function (element) {
    if (firstElement === undefined) {
      firstElement = element;
    }
  });

  return firstElement === undefined
    ? getFirstValue(arr.slice(1))
    : firstElement;
}

// Test cases
console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500
