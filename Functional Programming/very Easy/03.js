// Count the Arguments
// Create a function that returns the number of arguments it was called with.

// Examples
//  ➞ 0

// numArgs("foo") ➞ 1

//  ➞ 2

// numArgs(true, false) ➞ 2

// numArgs({}) ➞ 1


function numArgs(){

    return arguments.length

    

}

console.log( numArgs("foo") );
console.log(numArgs(true,false,true) );
console.log(numArgs({}));
console.log(numArgs(true, false));


