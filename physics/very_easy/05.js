// Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// // 1/RTotal = 1/6 + 1/3 + 1/6
// // 1/RTotal = 2/3
// // RTotal = 3/2 = 1.5
// Examples
// parallelResistance([6, 3]) ➞ 2

// parallelResistance([10, 20, 10]) ➞ 4

// parallelResistance([500, 500, 500]) ➞ 166.6
// // Round to the nearest decimal place
// Notes
// Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
// Round to the nearest decimal place.
// All inputs will be valid.




function parallelResistance(arr){
    let sum = 0
    for(let elm of arr){
        sum += 1/elm

    }
    let result = 1/sum
    return result.toFixed(1)

}


console.log(parallelResistance([6, 3]));
