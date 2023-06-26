// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter


const generations = [
  { generation: -3, male: 'great grandfather', female: 'great grandmother' },
  { generation: -2, male: 'grandfather', female: 'grandmother' },
  { generation: -1, male: 'father', female: 'mother' },
  { generation: 0, male: 'me!', female: 'me!' },
  { generation: 1, male: 'son', female: 'daughter' },
  { generation: 2, male: 'grandson', female: 'granddaughter' },
  { generation: 3, male: 'great grandson', female: 'great granddaughter' }
];




// function generation(gen,char){
    
//     let gens = Math.abs(gen)
//     let res =  generations[gens]
    
//     return gens ? res : char
  

// }
// console.log(generation(2, "f") );// ➞ "granddaughter"
// generation(-3, "m") //➞ "great grandfather"
// generation(1, "f") //➞ "daughter"




function generation(x, y) {
  const generations = [
    ["me!", "me!"],
    ["son", "daughter"],
    ["grandson", "granddaughter"],
    ["great grandson", "great granddaughter"],
    ["great grandfather", "great grandmother"],
    ["grandfather", "grandmother"],
    ["father", "mother"]
  ];

  const absX = Math.abs(x);
  const generationIndex = absX <= 3 ? absX : 6 - absX;
  const genderIndex = y === "m" ? 0 : 1;

  return generations[generationIndex][genderIndex];
}

console.log(generation(2, "f"));       // Output: "granddaughter"
console.log(generation(-3, "m"));      // Output: "great grandfather"
console.log(generation(1, "f"));       // Output: "daughter"
console.log(generation(0, "m"));       // Output: "me!"
console.log(generation(-2, "f"));      // Output: "grandmother"
console.log(generation(3, "m"));       // Output: "great grandson"
