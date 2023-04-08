// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.





// ==========================  way 01 ============================
console.log('way 01')


function minMax(arr){

    let newArr = []
    let max = arr[0]
    let min = arr[0]


    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }

    for(let j=0; j<arr.length; j++){
        if(arr[j]<min){
            min = arr[j]
        }
    }

    newArr.push(max,min)

    return newArr

}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));







