// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// Notes


// function arrayToString(arr){

//     let result = arr.join('')
//     return result

// }


// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));



function arrayToString(arr){

    return arr.join('')

}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); //➞ "123456"

console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //➞ "abcdef"

console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); //➞ "123asdAAAA"