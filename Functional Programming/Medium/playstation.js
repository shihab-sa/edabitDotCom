function differenceWith(firstArray, ...valueArrays) {
  const comparator = valueArrays.pop(); // Get the comparator function
  

  
}

// Example usage
const result = differenceWith(
  [
    { make: "mazda", engine: "v8" },
    { make: "toyota", engine: "v6" },
  ],
  [{ make: "toyota", engine: "v8" }],
  (a, b) => a.engine === b.engine
);

console.log(result);