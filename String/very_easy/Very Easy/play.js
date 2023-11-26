function hasSpaces(str) {
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") return true;
    }
  }
  return false;
}

console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));
