
function canNest(arr1, arr2) {
    console.log(...arr1);
    // Find the minimum and maximum values in each array
    const minArr1 = Math.min(arr1);
    const maxArr1 = Math.max(...arr1);
    const minArr2 = Math.min(...arr2);
    const maxArr2 = Math.max(...arr2);
   
  
    // Check if arr1's min is greater than arr2's min and arr1's max is less than arr2's max
    
  }
  
  // Test cases
  console.log(canNest([1, 2, 3, 4], [0, 6])); // ➞ true
  