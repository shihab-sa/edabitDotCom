// Flip the Boolean
// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.

// Examples
// flipBool(true) ➞ 0

// flipBool(false) ➞ 1

// flipBool(1) ➞ 0

// flipBool(0) ➞ 1
// Notes
// N/A



function flipBool(bol){
    //  if(bol == true){
    //     return 0
    //  }
    //  else if(bol == false){
    //     return 1
    //  }
    //  else if(!bol){
    //     return bol
    //  }

    return bol ? 0 : 1
}

console.log(flipBool(true) ); //➞ 0
console.log(flipBool(false)); //➞ 1
console.log(flipBool(1)); //➞ 0
console.log(flipBool(0)); //➞ 1