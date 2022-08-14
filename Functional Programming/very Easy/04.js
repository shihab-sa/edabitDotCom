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



// function invertArray(arr){

//     let newArray = []
//     arr.map((myarr)=>{
//         let result = myarr*(-1)
//         newArray.push(result)
//     })

//     return newArray

// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));



// function invertArray(arr){

//     let newArr = []
//     arr.map((x)=>{
//         let res = x * (-1)
//         newArr.push(res)
//     })
//     return newArr 

// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));




// function invertArray(arr){
//     let newArray = []
//     arr.map((x)=>{
//         let rresult = x*(-1)
//         newArray.push(rresult)
//     })

//     return newArray

// }

// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));


function invertArray(arr){

    let newArr = []
    for(let i=0; i<arr.length; i++){
        let result = arr[i] *(-1)
        newArr.push(result)
    }
    return newArr

}

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));