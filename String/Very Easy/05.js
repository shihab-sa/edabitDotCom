// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("45-15") ➞ 5

// calculator("49/7*2-3") ➞ 11


function calculator(rgx){

    return eval(rgx)

}


console.log(calculator("3+5") );
console.log(calculator("45-15"));
console.log(calculator("49/7*2-3"));
