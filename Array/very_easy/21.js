// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.


function toNumberArray(strToNum){
    let newArrNum = []

    for(let i=0; i<strToNum.length; i++){
        newArrNum.push(strToNum[i])
    }

    return newArrNum

}

console.log(toNumberArray(["9.4", "4.2"]));