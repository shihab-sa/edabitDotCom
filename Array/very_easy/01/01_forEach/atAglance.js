// memorize 01

let element;
return element;

// memorize 02

let found = false;
{
  if (!found) {
    found = true;
  }
}

// memorize 03

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
