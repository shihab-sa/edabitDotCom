function countTrue(arr) {
  let countTrue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== true) {
      countTrue++;
    }
  }

  return countTrue;
}

console.log(countTrue([true, false, false, true, false, false, true]));
