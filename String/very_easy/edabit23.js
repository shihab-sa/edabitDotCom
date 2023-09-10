// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."
// Notes

function relationToLuke(person) {
  switch (person) {
    case "Darth Vader":
      return "Luke, I am your father.";
    case "Leia":
      return "Luke, I am your sister.";
    case "Han":
      return "Luke, I am your brother in law.";
    case "R2D2":
      return "Luke, I am your droid.";
    default:
      return "I don't know who you are.";
  }
}

// Test cases
console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
console.log(relationToLuke("Leia")); // "Luke, I am your sister."
console.log(relationToLuke("Han")); // "Luke, I am your brother in law."
console.log(relationToLuke("R2D2")); // "Luke, I am your droid."
console.log(relationToLuke("Obi-Wan Kenobi")); // "I don't know who you are."
