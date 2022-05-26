// Testing K^K == N?
// Write a function that returns true if k^k == n for input (n, k) and return false otherwise.

// Examples
// kToK(4, 2) ➞ true

// kToK(387420489, 9) ➞ true
// // 9^9 == 387420489

// kToK(3124, 5) ➞ false

// kToK(17, 3) ➞ false
// Notes
// The ^ operator refers to exponentiation operation, not the bitwise XOR operation.

// function kToK(a,b){

//     if(b**b==a){
//         return true
//     }
//     else{
//         return false
//     }

// }

// let resultOne = kToK(4, 2)
// console.log(resultOne);



let result = (n,k)=> {
    return k**k == n ? "true" : "false"
}
console.log(result(4,2));