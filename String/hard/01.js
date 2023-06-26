function countLayers(rug) {

    
    const rows = rug.length;
    const cols = rug[0].length;
    let res = Math.min(rows,cols)/2
    console.log(res);
    
  }
  console.log(countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
  ])); // Output: 2