// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0
// Notes
// Check the Resources tab for info on recursion.


// ------------- ============== way 01 ======================= --------------
console.log('way 01');

function length(str){

    if(str === ""){
        return 0 
    }
    return 1 + length(str.slice(1))

}
console.log(length('apple'));
console.log(length('make'));
console.log(length(''));








// ------------- ============== way 02 ======================= --------------
console.log('way 02');

function length2(str){

    if(str === ""){
        return 0
    }
    else{
        return length2(str.slice(1)) + 1
    }

}


console.log(length2('apple'));
console.log(length2('make'));
console.log(length2(''));





// ------------- ============== way 03 ======================= --------------
console.log('way 03');



function length3(str,count=0){

    if(str === ""){
        return count
    }
    else{
        return length3(str.slice(1),count+1)
    }

}

console.log(length3('apple'));
console.log(length3('make'));
console.log(length3(''));





// ------------- ============== way 04 ======================= --------------
console.log('way 04');


function length4(str){

    return str === "" ? 0 : 1 + length4(str.slice(1))

   

}

console.log(length4('apple'));
console.log(length4('make'));
console.log(length4(''));




// ------------- ============== way 05 ======================= --------------
console.log('way 05');


function length5(str){

    return str === "" ? 0 : 1 + length5(str.slice(0,-1))

   

}

console.log(length5('apple'));
console.log(length5('make'));
console.log(length5(''));






// ------------- ============== way 06 ======================= --------------
console.log('way 06');




 function length(str, i = 0) {
   return str[i] === undefined ? i : length(str, i + 1); // ternary operator to handle base and recursive cases
 }




console.log(length("apple"));  // 5
console.log(length("make"));  // 4
console.log(length("a"));  // 1
console.log(length(""));  // 0



// shihabahmmedass@gmail.com
// another way
// Here's another way to implement the recursive length function in JavaScript:

// javascript
// Copy code
// function length(str) {
//   if (str === "") { // base case: end of string
//     return 0;
//   } else {
//     return length(str.replace(/^.{1}/,"")) + 1; // recursive case: call function on the rest of the string and increment count
//   }
// }
// Explanation:

// The function takes a string str as input. The base case is reached when the end of the string is reached, which is checked by testing if str is an empty string. If the base case is reached, the function returns 0. Otherwise, the function is called recursively on the substring obtained by replacing the first character in str with an empty string (str.replace(/^.{1}/,"")) and adding 1 to the result. This effectively removes the first character from the string, and the function continues to call itself with the remaining string until the base case is reached.

// Examples:

// javascript
// Copy code
// console.log(length("apple"));  // 5
// console.log(length("make"));  // 4
// console.log(length("a"));  // 1
// console.log(length(""));  // 0



// shihabahmmedass@gmail.com
// another way
// Here's another way to implement the recursive length function in JavaScript:

// javascript
// Copy code
// function length(str) {
//   return str.length === 0 ? 0 : length(str.substring(0, str.length - 1)) + 1; // ternary operator to handle base and recursive cases
// }
// Explanation:

// The function takes a string str as input and uses a ternary operator to handle both the base and recursive cases. If the length of the string is 0 (base case), the function returns 0. Otherwise, the function returns the result of calling the length function recursively on the substring that excludes the last character (str.substring(0, str.length - 1)) plus 1. This effectively removes the last character from the string, and the function continues to call itself with the remaining string until the base case is reached.

// Examples:

// javascript
// Copy code
// console.log(length("apple"));  // 5
// console.log(length("make"));  // 4
// console.log(length("a"));  // 1
// console.log(length(""));  // 0



// shihabahmmedass@gmail.com
// another way
// Here's another way to implement the recursive length function in JavaScript:

// javascript
// Copy code
// function length(str) {
//   if (str === "") { // base case: end of string
//     return 0;
//   } else {
//     return 1 + length(str.substr(1)); // recursive case: call function on the rest of the string and increment count
//   }
// }
// Explanation:

// The function takes a string str as input. The base case is reached when the end of the string is reached, which is checked by testing if str is an empty string. If the base case is reached, the function returns 0. Otherwise, the function is called recursively on the substring obtained by removing the first character in str using substr and adding 1 to the result. This effectively removes the first character from the string, and the function continues to call itself with the remaining string until the base case is reached.

// Examples:

// javascript
// Copy code
// console.log(length("apple"));  // 5
// console.log(length("make"));  // 4
// console.log(length("a"));  // 1
// console.log(length(""));  // 0



// shihabahmmedass@gmail.com
// another way
// Here's another way to implement the recursive length function in JavaScript:

// javascript
// Copy code
// function length(str) {
//   return str === "" ? 0 : 1 + length(str.slice(1)); // ternary operator to handle base and recursive cases
// }
// Explanation:

// The function takes a string str as input and uses a ternary operator to handle both the base and recursive cases. If the string is empty (base case), the function returns 0. Otherwise, the function returns 1 plus the result of calling the length function recursively on the substring that starts from the second character (str.slice(1)). This effectively removes the first character from the string, and the function continues to call itself with the remaining string until the base case is reached.

// Examples:

// javascript
// Copy code
// console.log(length("apple"));  // 5
// console.log(length("make"));  // 4
// console.log(length("a"));  // 1
// console.log(length(""));  // 0



