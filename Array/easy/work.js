function minMax(arr) {
  let newArr = [];
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
    }
  }

  newArr.push(min, max);
  return newArr;
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
