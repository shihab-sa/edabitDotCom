// Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"

// keyboardMistakes("DUBL1N") ➞ "DUBLIN"

// keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"
// Notes
// N/A

function keyboardMistakes(str) {
  let misktaChar = [
    {
      A: 4,
    },
    {
      S: 5,
    },
    {
      O: 0,
    },
    {
      L: 1,
    },
  ];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!isNaN(char)) {
      console.log(misktaChar[char]);
    }
  }
}

console.log(keyboardMistakes("MUB45H1R"));
