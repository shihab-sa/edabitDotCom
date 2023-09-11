function doubleSwap(str, s1, s2) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === s1) {
      newStr += s2;
    } else if (str[i] === s2) {
      newStr += s1;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(doubleSwap("aabbccc", "a", "b"));
