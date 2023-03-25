// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
// intToString(4) ➞ "4"

// stringToInt("4") ➞ 4

// intToString(29348) ➞ "29348"
// Notes
// You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.


function intToString(nToStr){

    let result = nToStr
    let resultTwo = result.toString()
    console.log( typeof resultTwo);
    return resultTwo
    

}

console.log(intToString(5));