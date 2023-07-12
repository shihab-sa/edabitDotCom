// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1
// Notes
// N/A

step 01 

// এই name ডাবল আছে পর পর, সেটা string আকারে, তাহলে যা করতে হবে,  indexOf() lastIndexOf() দিয়ে

// function potatoes(str) {
//   const lowercaseStr = str.toLowerCase();
//   const target = "potato"

//   // for single 
//   let index = lowercaseStr.indexOf(target)

//   //for duplicate 
//   let index1 = lowercaseStr.lastIndexOf(target)
//   //let count = 0 

//   console.log('the indexof = ',index)
//   console.log('the lastindex of is =',index1)
// }

// console.log(potatoes("potato"));  // ➞ 1
// console.log(potatoes("potatopotato"));  // ➞ 2
// console.log(potatoes("potatoapplepotato"));  //➞ 1




Final Problem 

function potatoes(str) {
    const lowercaseStr = str.toLowerCase();
    const target = 'potato';
    let count = 0;
    
    let index = lowercaseStr.indexOf(target);
    while (index !== -1) {
      count++;
      index = lowercaseStr.indexOf(target, index + 1);
    }
    
    return count;
  }
  


console.log(potatoes("potato"));  // ➞ 1
console.log(potatoes("potatopotato"));  // ➞ 2
console.log(potatoes("potatoapple"));  //➞ 1