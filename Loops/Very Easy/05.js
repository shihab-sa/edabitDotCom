// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1


// let arr = [1,5,3]
// let res = arr.indexOf(30)
// console.log(res);


function search(arr,n){
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(n) && n){
            return arr.indexOf(n)
        }
        else{
            return arr.indexOf(n)
        }
        
    }
}


let result = search([1, 5, 3], 1)
console.log(result);

let rres = search([9, 8, 3], 3) 
console.log(rres);

let das = search([1, 2, 3], 4)
console.log(das);