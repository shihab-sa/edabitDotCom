// Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.



 function Buggy(numbers){
     let results = []
     for(let i=1;i<=numbers; i++){
         results.push(i)
     }
     return results
 }

 console.log(Buggy(6));
 console.log(Buggy(3));
 console.log(Buggy(1));