function findNemo(str) {
  let word = str.split(" ");
  let indexNemo = word.findIndex((x) => x == "Nemo");

  if (indexNemo !== -1) {
    let position = indexNemo + 1;
    return `Fond the meno at ${position} `;
  } else {
    return `not the find`;
  }
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
