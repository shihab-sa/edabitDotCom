// Find the Bug: Returning the Container
// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

// The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

// Examples
// getContainer("Bread") ➞ "bag"

// getContainer("Beer") ➞ "bottle"

// getContainer("Candy") ➞ "plastic"

// getContainer("Cheese") ➞ null
// Notes
// Think about what the object's packaging should be.

function getContainer(product) {
  const containers = {
    Bread: "bag",
    Beer: "bottle",
    Candy: "plastic",
  };

  return containers[product] || null;
}

console.log(getContainer("Bread")); // Output: "bag"
console.log(getContainer("Beer")); // Output: "bottle"
console.log(getContainer("Candy")); // Output: "plastic"
console.log(getContainer("Cheese")); // Output: null
