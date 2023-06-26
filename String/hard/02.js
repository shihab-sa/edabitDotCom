function countLayers(rug) {
    const rows = rug.length;
    const cols = rug[0].length;
    let layerCount = 0;
  
    for (let i = 0; i < Math.min(rows, cols) / 2; i++) {
      const topLeft = rug[i][i]; 
      const bottomRight = rug[rows - 1 - i][cols - 1 - i];
  
      if (topLeft !== bottomRight) {
        // If the top-left and bottom-right corners of the current layer are different,
        // it means we have reached the outermost layer of the rug.
        break;
      }
  
      layerCount++;
    }
  
    return layerCount;
  }
  console.log(countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
  ])); // Output: 2
  
  console.log(countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ])); // Output: 3
  
  console.log(countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
  ])); // Output: 5
  