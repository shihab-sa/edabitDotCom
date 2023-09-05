function testJackpot(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(testJackpot(["@", "@", "@", "@"]));
