// Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
// greeting("Matt") ➞ "Hello, Matt!"

// greeting("Helen") ➞ "Hello, Helen!"

// greeting("Mubashir") ➞ "Hello, my Love!"


// function greeting(greet){
//     return `'hellow ${greet}'`
// }

// console.log(greeting("Matt")); //➞ "Hello, Matt!"

// console.log(greeting("Helen")); //➞ "Hello, Helen!"

// console.log(greeting("Mubashir")); //➞ "Hello, my Love!"



function greeting(name) {
    if (name === "Mubashir") {
      return "Hello, my Love!";
    } else {
      return "Hello, " + name + "!";
    }
}
  
console.log(greeting("Matt")); //➞ "Hello, Matt!"

console.log(greeting("Helen")); //➞ "Hello, Helen!"

console.log(greeting("Mubashir")); //➞ "Hello, my Love!"

  