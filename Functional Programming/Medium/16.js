// Learn Lodash (3): _.differenceWith, Find the Difference in Arrays Using a Comparison Function
// According to the lodash documentation, This method is like _.difference except it accepts a comparator which is invoked to compare elements of the array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Using a car dealership example, if you have two parking lots and want to see which cars are different this function enables you to check each car in one lot against each car in the other using a comparison function which checks two values and returns true or false if they are equal or not. So you could check engine size and compare to see which cars are different according to the size of their engines. If lot one has a car that has a v6 engine and lot two doesn't have any cars that have v6 engines this would be the difference and the function would return the car with the v6 engine.

// There is only one first array that is used to look for the difference but there can be many values arrays that are used to check against.

// Examples
// differenceWith([
//   { make: "mazda", engine: "v8" },   // This is the first array we compare with.
//   { make: "toyota",  engine: "v6" },
// ],
//   [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
//   (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
// ) ➞ [
//   { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
// ]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.







function differenceWith(firstArray, ...valueArrays) {
    const comparator = valueArrays.pop(); // Get the comparator function
    const values = valueArrays.flat(); // Flatten the value arrays into a single array
  
    return firstArray.filter((arrVal) => {
      return !values.some((othVal) => comparator(arrVal, othVal));
    });
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
  
