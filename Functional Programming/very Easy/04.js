// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []

// function invertArray(arr){
//     let result = arr.map((x)=>{
//         return x*(-1)
//     })

//     return result 

// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]) );



function invertArray(arr){

    let newArray = []
    arr.map((myarr)=>{
        let result = myarr*(-1)
        newArray.push(result)
    })

    return newArray

}

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));