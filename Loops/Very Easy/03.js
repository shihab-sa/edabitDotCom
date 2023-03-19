// To the Power of _____

// function calculateExponent(a,b){
//     return a ** b

// }

// console.log(calculateExponent(5, 5));
// console.log(calculateExponent(10, 10));
// console.log(calculateExponent(3, 3));





// anothers way 


function calculateExponent(base, exponent) {
    let result = 1;
    for(let i = 0; i < exponent; i++) {
      result *= base;     //  res = res * base // res =   1 * 5                   // 5 , 25 , 
      //console.log(result)
    }
    return result;
  }
  console.log(calculateExponent(5, 5))