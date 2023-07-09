// oin Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

// Examples
// joinPath("portion1", "portion2") ➞ "portion1/portion2"

// joinPath("portion1/", "portion2") ➞ "portion1/portion2"

// joinPath("portion1", "/portion2") ➞ "portion1/portion2"

// joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
// Notes
// Try not to solve this challenge using only if-else conditions.

function joinPath(portion1, portion2) {
    if (portion1.endsWith('/') && portion2.startsWith('/')) {
      return portion1 + portion2.substring(1);
    } else if (portion1.endsWith('/') || portion2.startsWith('/')) {
      return portion1 + portion2;
    } else {
      return portion1 + '/' + portion2;
    }
  }

  
console.log(joinPath("portion1", "portion2"));        // Output: portion1/portion2
console.log(joinPath("portion1/", "portion2"));       // Output: portion1/portion2
console.log(joinPath("portion1", "/portion2"));       // Output: portion1/portion2
console.log(joinPath("portion1/", "/portion2"));      // Output: portion1/portion2


// step by step 


function joinPath(str1,str2){
    
  if(str1.endsWith("/") && str2.startsWith("/")){
      return str1 + "/" + str2
  }
  
}
console.log(joinPath("portion1/", "/portion2"))
