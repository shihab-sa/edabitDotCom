// Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]


// function incrementItems(arr){
//     let result = arr.map((increment)=>{
//         return increment + 1
//     })
//     return result

// }

// console.log(incrementItems([0, 1, 2, 3]));
// console.log( incrementItems([2, 4, 6, 8]) );
// console.log( incrementItems([-1, -2, -3, -4]));
// console.log( incrementItems([2, 4, 6, 8]) );
// console.log( incrementItems([-1, -2, -3, -4]));


// function incrementItems(arr){

//    let res =  arr.map((x)=>{
//         return x + 1 
//     })

//     return res

// }

// console.log(incrementItems([0, 1, 2, 3]));




function increment(arr){
   
   let res = arr.map((x)=>{
      return x + 1 
   })
   return res

  

    

}

console.log(increment([1,2,3,4,5]));
