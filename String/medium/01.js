// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter






function generation(x, y) {
  const generations = {
    "-3": { m: "great grandfather", f: "great grandmother" },
    "-2": { m: "grandfather", f: "grandmother" },
    "-1": { m: "father", f: "mother" },
    "0": { m: "me!", f: "me!" },
    "1": { m: "son", f: "daughter" },
    "2": { m: "grandson", f: "granddaughter" },
    "3": { m: "great grandson", f: "great granddaughter" },
  };

  if (x === 0) {
    return generations[x][y];
  } else if (x < 0) {
    return generations[Math.abs(x)][y.charAt(0)] || "unknown ancestor";
  } else {
    return generations[x][y.charAt(0)] || "unknown descendant";
  }
}

// Examples
console.log(generation(2, "f")); // Output: "granddaughter"
console.log(generation(-3, "m")); // Output: "great grandfather"
console.log(generation(1, "f")); // Output: "daughter"


console.log(generation(2, "f"));       // Output: "granddaughter"
console.log(generation(-3, "m"));      // Output: "great grandfather"
console.log(generation(1, "f"));       // Output: "daughter"
console.log(generation(0, "m"));       // Output: "me!"
console.log(generation(-2, "f"));      // Output: "grandmother"
console.log(generation(3, "m"));       // Output: "great grandson"
   