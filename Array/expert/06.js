function recurIndex(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return {
        [char]: [charCount[char], i],
      };
    }
    charCount[char] = i;
  }

  return {};
}

// Example usages:
console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
console.log(recurIndex("")); // {}
console.log(recurIndex(null)); // {}
