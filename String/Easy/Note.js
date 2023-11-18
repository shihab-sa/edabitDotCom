// 01
let newStr = "";
newStr += str[i];

// 02

str[i] === str[i].toString().toLowerCase();

//

let str = "shihab";
console.log(str.indexOf("h"));

//

function potatoes(str) {
  const lowercaseStr = str.toLowerCase();
  const target = "potato";
  console.log(lowercaseStr.indexOf(target));
}

console.log(potatoes("potato")); // ➞ 1
console.log(potatoes("potatopotato")); // ➞ 2

//

function potatoes(str) {
  const lowercaseStr = str.toLowerCase();
  const target = "potato";
  console.log(lowercaseStr.indexOf(target));
}

console.log(potatoes("shihabpotatoapple")); //➞ 1'""
