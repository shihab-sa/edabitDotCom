function recurIndex(str) {
  if (!str || typeof str !== "string" || str.length === 0) {
    return {};
  }

  const seen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in seen) {
      return { [char]: [seen[char], i] };
    } else if (!(char in seen)) {
      seen[char] = i;
    }
  }

  return {};
}

// Test cases
console.log(recurIndex("DXTDXTXDTXD")); // ➞ {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // ➞ {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // ➞ {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // ➞ {"D": [3, 7]}
console.log(recurIndex("")); // ➞ {}
console.log(recurIndex(null)); // ➞ {}
