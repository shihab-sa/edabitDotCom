// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.
// Notes
// N/A




function sevenBoom(arr){

    for(let i=0; i<arr.length; i++){
    //    if(arr[i]===7 || arr[i]%10==7){
    //     return 'boom'
    //    }

    if(arr[i].toString().includes(7)){
        return 'boom'
    }
    }
    return 'not boom'

}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([2, 55, 60, 97, 86]));