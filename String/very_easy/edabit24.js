// Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples
// frontThree("Python") ➞ "PytPytPyt"

// frontThree("Cucumber") ➞ "CucCucCuc"

// frontThree("bioshock") ➞ "biobiobio"
// Notes
// Don't forget to return the result.

function frontThree(str) {
  let theSlice = str.slice(0, 3);
  console.log(theSlice.repeat(theSlice.length));
}

frontThree("Python");
frontThree("Cucumber");
frontThree("bioshock");
