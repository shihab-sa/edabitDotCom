function ree(str) {
  if (str === "") {
    return 0
  }
  return  ree(str.slice(1)) + 1
}

console.log(ree("shihba"));