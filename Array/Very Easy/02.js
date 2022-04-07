// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// // makePair(512124, 215) ➞ [512124, 215]



function pairArray(...arr){

    return [...arr]

}


let result = pairArray(22,10)
console.log(result);

let result2 = pairArray(51, 21,23,55)
console.log(result2);