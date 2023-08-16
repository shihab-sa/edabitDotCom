/*

"23+6" এই রকম যদি থাকে আগে লুপ চালিয়ে নিব then দেখব আলাদা ভাবে আসছে, কিন্তু সেগুলো string
  চেক করো সব গুলো  string.

*/

function calculator(expression){
  

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      console.log(char);
    }
  }
  
  // Test cases
  console.log(calculator("23+4")); 