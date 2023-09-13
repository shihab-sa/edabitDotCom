// Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"

// fixImport("import randint from random") ➞ "from random import randint"

// fixImport("import pi from math") ➞ "from math import pi"
// Notes
// All Tests will be valid strings.

function fixImport(incorrectImport) {
  const parts = incorrectImport.split(" ");
  if (
    parts.length === 4 &&
    parts[0] === "import" &&
    parts[1] !== "from" &&
    parts[2] === "from"
  ) {
    const module_name = parts[3];
    const object = parts[1];
    return `from ${module_name} import ${object}`;
  } else {
    return incorrectImport; // Return the input string if it doesn't match the expected format
  }
}

// Test cases
console.log(fixImport("import object from module_name")); // ➞ "from module_name import object"
console.log(fixImport("import randint from random")); // ➞ "from random import randint"
console.log(fixImport("import pi from math")); // ➞ "from math import pi"
