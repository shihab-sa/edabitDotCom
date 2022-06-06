// Find the Bug: Returning Valid Units of Measure
// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

// Expected results
// hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }) ➞ true

// hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }) ➞ false

// hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }) ➞ false

// hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }) ➞ false
// Notes


