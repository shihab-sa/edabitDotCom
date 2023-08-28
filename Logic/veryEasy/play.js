function getContainer(product) {
  let container = {
    Bread: "bag",
    Beer: "bread ",
  };

  return container[product] || null;
}

console.log(getContainer("Bread"));
console.log(getContainer("Beer"));
console.log(getContainer("Candy"));
console.log(getContainer("Cheese"));
