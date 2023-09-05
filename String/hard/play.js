function reverseOdd(str) {
  let w = str.split(" ");

  for (let i = 0; i < w.length; i++) {
    if (w.length % 2 !== 0) {
      w[i] = w[i].split("").reverse().join("");
    }
  }
  return w.join("");
}

// Test cases
//console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
