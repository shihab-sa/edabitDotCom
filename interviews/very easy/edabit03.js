// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function invertArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * -1);
  }

  return newArr;
}
console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
