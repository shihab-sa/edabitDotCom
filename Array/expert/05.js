function recurIndex(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
  }
}

// Example usages:
console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
