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
// N/A

const relationsData = [
  { person: "Darth Vader", relation: "father" },
  { person: "Leia", relation: "sister" },
  { person: "Han", relation: "brother in law" },
  { person: "R2D2", relation: "droid" },
];

function relationToLuke(name) {
  const match = relationsData.find((item) => item.person === name);
  if (match) {
    return `Luke, I am your ${match.relation}.`;
  } else {
    return "Luke, I am not related to this person.";
  }
}

// Examples
console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
console.log(relationToLuke("Leia")); // "Luke, I am your sister."
console.log(relationToLuke("Han")); // "Luke, I am your brother in law."
console.log(relationToLuke("R2D2")); // "Luke, I am your droid."
console.log(relationToLuke("Obi-Wan Kenobi")); // "Luke, I am not related to this person."
