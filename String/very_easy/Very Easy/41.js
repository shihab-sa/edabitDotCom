// Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
  let wordInArr = str.split(" ");

  for (let i = 0; i < wordInArr.length; i++) {
    if (wordInArr[i] === "edabit") {
      return wordInArr.join(" ");
    } else if (wordInArr[i] !== "amazing")
      return `${wordInArr.slice(0, 2)} not ${wordInArr.slice(2, 3)}`;
  }
}

// Test cases
console.log(amazingEdabit("edabit is amazing.")); // ➞ "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")); // ➞ "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")); // ➞ "Infinity is not amazing."
