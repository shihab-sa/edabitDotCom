// Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// Examples
// owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

// owofied("Do you ever feel like a plastic bag")
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

// owofied("Cause baby you're a firework")
// ➞ "Causwe baby you'rwe a fwirwework owo"
// Notes
// Don't forget to return the value!
// There's a space in front of owo!

function owofied(sentence) {
  let owofiedSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "i" || sentence[i] === "I") {
      owofiedSentence += "wi";
    } else if (sentence[i] === "e" || sentence[i] === "E") {
      owofiedSentence += "we";
    } else {
      owofiedSentence += sentence[i];
    }
  }
  owofiedSentence += " owo";
  return owofiedSentence;
}

// Test cases
console.log(owofied("I'm gonna ride 'til I can't no more")); // Output: "I'm gonna rwidwe 'twil I can't no morwe owo"
console.log(owofied("Do you ever feel like a plastic bag")); // Output: "Do you wevwer fwewel lwikwe a plastwic bag owo"
console.log(owofied("Cause baby you're a firework")); // Output: "Causwe baby you'rwe a fwirwework owo"

/*

এই ভাবে কোন কিছু যোগ করতে চাইলে এই ভাবে লিখতে হয়
owofiedSentence += "wi";

*/
