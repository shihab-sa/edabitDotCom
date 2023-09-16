function potatoes(str) {
  let index = str.indexOf("potato", 2);

  console.log(index);
}

console.log(potatoes("potato")); // ➞ 1
console.log(potatoes("potatopotato")); // ➞ 2
console.log(potatoes("potatoapple")); //➞ 1'""
