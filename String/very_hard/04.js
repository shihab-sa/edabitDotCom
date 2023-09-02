// Sorting Band Names without Articles
// Create a function that sorts the given array of band names discounting the articles "The", "A", "An" if the first word of the name categorically belongs to.

// Examples
// bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"])
// ➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]

// bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"])
// ➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]

// bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"])
// ➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
// Notes
// You have to return the sorted full band names.


 
function bandNamesSort(bandNames) {
  const articles = ["The", "A", "An"];

  const sortedNames = bandNames.slice().sort((a, b) => {
    const aWords = a.split(" ");
    const bWords = b.split(" ");

    const aIndex = articles.includes(aWords[0]) ? 1 : 0;
    const bIndex = articles.includes(bWords[0]) ? 1 : 0;

    return aWords[aIndex].localeCompare(bWords[bIndex]);
  });

  return sortedNames;
}

// Test cases
console.log(
  bandNamesSort([
    "The New Yardbirds",
    "The Beatles",
    "The Square Roots",
    "On A Friday",
    "An Irony",
  ])
);
console.log(
  bandNamesSort([
    "The Platters",
    "A Yard of Yarn",
    "The Everly Brothers",
    "A Monster Effect",
    "The Sex Maggots",
  ])
);
console.log(
  bandNamesSort([
    "But Myth",
    "An Old Dog",
    "Def Leppard",
    "The Any Glitters",
    "The Dawn",
  ])
);
