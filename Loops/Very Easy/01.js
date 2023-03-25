// Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]


// ==========================  way 01 
console.log('way 01')

function myFun(arr){
    let newArr = []
    for(let i=1; i<=arr; i++){
        newArr.push(i)
    }
    return newArr
}

console.log(myFun(6))
console.log(myFun(3))
console.log(myFun(1))




// ==========================  way 02 
console.log('way 02')


 function printArray2(num) {
    return Array.from({length: num},(_, i) => i + 1);
 }


 console.log(printArray2(6))
 console.log(printArray2(3))
 console.log(printArray2(1))




 
// ==========================  way 03
console.log('way 03')















