// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"


function concatName(fName,lName){

    return  fName.concat(",",lName)

}


console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));