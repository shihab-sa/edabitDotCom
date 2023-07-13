function isSmooth(sentence) {
    const words = sentence.toLowerCase().split(' ');
  
     for(let i=0; i<words.length-1; i++){
         let currentWord = words[i]
         console.log(currentWord);

         let nextWord = words[i+1]
         console.log(nextWord);
     }
   
  }
  
  
  //console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // true
  console.log(isSmooth("Someone is outside the doorway")); // false
 // console.log(isSmooth("She eats super righteously")); // true