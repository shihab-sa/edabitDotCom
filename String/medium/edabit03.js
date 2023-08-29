// Get the Area of a Country
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// Examples
// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

// areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(countryName, area) {
  const totalWorldLandmass = 148940000; // Total world's landmass in Km^2
  const proportion = (area / totalWorldLandmass) * 100; // Calculate the proportion

  const result = `${countryName} is ${proportion.toFixed(
    2
  )}% of the total world's landmass`;
  return result;
}

// Test cases
console.log(areaOfCountry("Russia", 17098242)); // Output: "Russia is 11.48% of the total world's landmass"
console.log(areaOfCountry("USA", 9372610)); // Output: "USA is 6.29% of the total world's landmass"
console.log(areaOfCountry("Iran", 1648195)); // Output: "Iran is 1.11% of the total world's landmass"
