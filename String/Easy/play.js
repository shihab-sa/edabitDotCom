function charCount(singleChar, strings) {
  let count = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == singleChar) {
      count++;
    }
  }
  return count;
}

console.log(charCount("a", "edabait"));
