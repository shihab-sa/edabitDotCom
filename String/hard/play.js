function doubleSwap(str, c1, c2) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      newStr += c2;
    } else if (str[i] === c2) {
      newStr += c1;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(doubleSwap("aabbccc", "a", "b"));
