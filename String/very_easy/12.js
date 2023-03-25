// Evaluate an Equation
// Create a function that evaluates an equation.

// Examples
// eq("1+2") ➞ 3

// eq("6/(9-7)") ➞ 3

// eq("3+2-4") ➞ 1



function eq(inp){
    return eval(inp)
}

console.log(eq("1+2") );
console.log(eq("6/(9-7)"));