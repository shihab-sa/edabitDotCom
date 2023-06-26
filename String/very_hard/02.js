function splitNCases(str, cases) {
    if (str.length % cases !== 0) {
      return ["Error"];
    }
    
    const caseLength = str.length / cases;
    const result = [];
    
    for (let i = 0; i < str.length; i += caseLength) {
      result.push(str.substr(i, caseLength));
    }
    
    return result;
  }

  
console.log(splitNCases("Strengthened", 6)); // Output: ["St", "re", "ng", "th", "en", "ed"]
console.log(splitNCases("Unscrupulous", 2)); // Output: ["Unscru", "pulous"]
console.log(splitNCases("Flavorless", 1)); // Output: ["Flavorless"]
console.log(splitNCases("Hello", 3)); // Output: ["He", "ll", "o"]
console.log(splitNCases("Test", 5)); // Output: ["Error"]
