function zeroesToEnd(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        console.log(arr[right]);
    }
  
    
  }
  console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // ➞ [1, 2, 4, 5, 0, 0, 0]
//   console.log(zeroesToEnd([0, 0, 2, 0, 5])); // ➞ [2, 5, 0, 0, 0]
//   console.log(zeroesToEnd([4, 4, 5])); // ➞ [4, 4, 5]
//   console.log(zeroesToEnd([0, 0])); // ➞ [0, 0]