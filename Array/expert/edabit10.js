function numThenChar(arr) {
  // Custom sorting function
  function customSort(a, b) {
    // Function to determine the type of element
    function getType(x) {
      return typeof x === "number" ? 0 : 1;
    }

    // Compare types first
    const typeComparison = getType(a) - getType(b);
    if (typeComparison !== 0) {
      return typeComparison;
    }

    // If both elements are numbers, compare their values
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }

    // If both elements are strings, compare their values
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }

    // Numbers come before letters
    return typeof a === "number" ? -1 : 1;
  }

  // Sort each sub-array using the custom sorting function
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort(customSort);
  }

  // Sort the outer array based on the lengths of sub-arrays
  arr.sort((a, b) => a.length - b.length);

  return arr;
}

// Test cases
const result1 = numThenChar([
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5],
  [7, "d"],
  ["f", "e", 8],
]);

const result2 = numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0],
  [0.5, "d", "X", 3, "s"],
  ["f", "e", 8],
  ["p", "Y", "Z"],
  [12, 18],
]);

console.log(result1);
console.log(result2);
