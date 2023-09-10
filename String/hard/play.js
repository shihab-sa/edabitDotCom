function reverseOdd(str) {
  let word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("");
  }
  return word.join(" ");
}

console.log(reverseOdd("One two three four"));
