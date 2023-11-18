// Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
  // Check if the word "edabit" is part of the string (case-insensitive)
  if (str.toLowerCase().includes("edabit")) {
    return str; // Return the string without any change
  } else {
    // Replace the word "amazing" with "not amazing"
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() === "amazing") {
        words[i] = "not amazing";
      }
    }
    return words.join(" ");
  }
}

// Test cases
console.log(amazingEdabit("edabit is amazing.")); // ➞ "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")); // ➞ "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")); // ➞ "Infinity is not amazing."
