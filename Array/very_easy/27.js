// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.


function halfQuarterEighth(number){

   let half = number*(1/2)
   let quarter = number*(1/4)
   let eighth = number*(1/8)

   return [half, quarter, eighth]

}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22))
console.log(halfQuarterEighth(25));