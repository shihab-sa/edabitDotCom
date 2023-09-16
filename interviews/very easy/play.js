function removeNumbers(str) {
  return str
    .split("")
    .filter((data) => !parseInt(data))
    .join("");
}

console.log(removeNumbers("mubashir1"));
