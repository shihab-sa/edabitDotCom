function spaceMeOut(str) {
  var spacedString = "";

  for (let i = 0; i < str.length; i++) {
    spacedString += str[i];

    if (i < str.length - 1) {
      spacedString += " ";
    }
  }

  return spacedString;
}

// Examples
console.log(spaceMeOut("space")); // Output: "s p a c e"
console.log(spaceMeOut("far out")); // Output: "f a r   o u t"
console.log(spaceMeOut("elongated musk")); // Output: "e l o n g a t e d   m u s k"
