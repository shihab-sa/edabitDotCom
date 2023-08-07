//---------------------------------------------String [Hard ] --------------------------------------------------------

/* Smooth Sentences

Carlos is a huge fan of something he calls smooth sentences.
A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").
The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".
Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

Examples
isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true
isSmooth("Someone is outside the doorway") ➞ false
isSmooth("She eats super righteously") ➞ true

Notes
The last and first letters are case insensitive.
There will be no punctuation in each sentence.

*/



function isSmooth(sentence) {
  const words = sentence.toLowerCase().split(' ');
   

  for (let i = 0; i < words.length-1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];
    
    if (currentWord[currentWord.length - 1] == nextWord[0]) {
      return true;
    }
  }

  return false;
}


console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // true
console.log(isSmooth("Someone is outside the doorway")); // false
console.log(isSmooth("She eats super righteously")); // true
