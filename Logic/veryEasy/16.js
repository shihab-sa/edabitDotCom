x > 50 ? "majority" : x < 50 ? "minority" : "draw"


// Ternary Operator


function areBothTrue(a, b) {
    return a && b ? "both" : a ? "first" : b ? "second" : "neither";
  }