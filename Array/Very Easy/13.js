// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.

 function search(arr,indx){

    return arr.indexOf(indx)

 }

 console.log(search([1, 5, 3], 5));
 console.log(search([9, 8, 3], 3));
 console.log(search([1, 2, 3], 4));


// let arr = [1,2,3,4,10]

// // let res = arr.indexOf(10)
// // console.log(res);


// for(let i=0; i<arr.length; i++){
//     // console.log(arr[i]);

//     if(arr[i] == 10){
//         console.log('finding',arr[i]);
//         break;
//     }
// }