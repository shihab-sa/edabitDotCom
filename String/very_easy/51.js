// Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

// Examples
// isBoiling("212F") ➞ true

// isBoiling("100C") ➞ true

// isBoiling("0F") ➞ false
// Notes
// The boiling point of water is 212F in Fahrenheit and 100C in Celsius.

function isBoiling(str) {
  if (str == "212F" || str == "100C") {
    return true;
  } else {
    return false;
  }
}

console.log(isBoiling("212F"));
console.log(isBoiling("100C"));
console.log(isBoiling("0F"));

// way 02

function isBoiling(temperature) {
  // Extract the temperature value and unit (Fahrenheit or Celsius)
  const tempValue = parseFloat(temperature);
  const unit = temperature.slice(-1);

  // Check if the unit is Fahrenheit
  if (unit === "F") {
    return tempValue >= 212; // Boiling point of water in Fahrenheit
  }

  // Check if the unit is Celsius
  if (unit === "C") {
    return tempValue >= 100; // Boiling point of water in Celsius
  }

  // If the unit is not recognized (neither F nor C), return false
  return false;
}

// Test cases
console.log(isBoiling("212F")); // true
console.log(isBoiling("100C")); // true
console.log(isBoiling("0F")); // false
