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

//======================================= way 01  ==============================
console.log('way 01');
function getFirstValue(arr){
    return arr[0]

}
console.log(getFirstValue([1, 2, 3])); //➞ 1
console.log(getFirstValue([80, 5, 100])); //➞ 80
console.log(getFirstValue([-500, 0, 50])); //➞ -500




// ============================== way 02  ==========================
console.log('way 02');

function getFirstValue2([first,...last]){

    return first

}

console.log(getFirstValue2([1, 2, 3])); //➞ 1
console.log(getFirstValue2([80, 5, 100])); //➞ 80
console.log(getFirstValue2([-500, 0, 50])); //➞ -500



// ============================== way 03==========================
console.log('way 03');

function getFirstValue3(arr){

    return arr.shift()

}

console.log(getFirstValue3([1, 2, 3])); //➞ 1
console.log(getFirstValue3([80, 5, 100])); //➞ 80
console.log(getFirstValue3([-500, 0, 50])); //➞ -500




// ============================== way 04==========================
console.log('way 04');


function getFirstValue(arr) {
    return arr.length > 0 ? arr[0] : undefined;
  }

  console.log(getFirstValue([1, 2, 3])); // Output: 1
console.log(getFirstValue([80, 5, 100])); // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500
