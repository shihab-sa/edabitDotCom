// Roman Numeral Converter
// Create a function that takes an Arabic number and converts it into a Roman number.

// Examples
// convertToRoman(2) ➞ "II"

// convertToRoman(12) ➞ "XII"

// convertToRoman(16) ➞ "XVI"
// Notes
// All roman numerals should be returned as uppercase.
// The largest number that can be represented in this notation is 3,999.

function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return "Number out of range";
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      result += numeral.numeral;
      num -= numeral.value;
    }
  }

  return result;
}
console.log(convertToRoman(23));
console.log(convertToRoman(12)); // Output: "XII"
console.log(convertToRoman(16)); // Output: "XVI"
