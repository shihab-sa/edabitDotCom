// Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
// greeting("Matt") ➞ "Hello, Matt!"

// greeting("Helen") ➞ "Hello, Helen!"

// greeting("Mubashir") ➞ "Hello, my Love!"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function greeting(str) {
  if (str === "Mubashir") {
    return "Hellow! I love uou";
  } else {
    return `Hellowc! ${str} `;
  }
}

console.log(greeting("Mubashir"));
console.log(greeting("Helen"));

console.log(greeting("Matt"));
