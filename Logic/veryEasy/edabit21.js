// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples
// repeatString("Mubashir", 2) ➞ "MubashirMubashir"

// repeatString("Matt", 3) ➞ "MattMattMatt"

// repeatString(1990, 7) ➞ "Not A String !!"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function repeatString(str, num) {
  if (typeof str !== "string") {
    return "not string";
  }
  let newStr = "";

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
}

console.log(repeatString("Mubashir", 2));
console.log(repeatString(1990, 7));
