function isSmooth(sentence) {
    const words = sentence.toLowerCase().split('  ');
  
    console.log(words)
   
  }
  
  
  console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // true
  console.log(isSmooth("Someone is outside the doorway")); // false
  console.log(isSmooth("She eats super righteously")); // true