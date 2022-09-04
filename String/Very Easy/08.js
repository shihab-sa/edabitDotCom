// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false



function isEmpty(str){
    if(str == ""){
        return true
    }
    else{
        return false
    }

}

console.log(isEmpty(""));
console.log(isEmpty("sss"));
console.log(isEmpty(""));