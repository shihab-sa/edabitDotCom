// Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1

// word("two") ➞ 2

// word("nine") ➞ 9
// Notes
// All numbers will be single digit positive integers.


// ==========================  way 01  ========================== 

function word(str) {
  let wordChar = str.toLowerCase();

  switch (wordChar) {
    case "one":
      return 1;
  }
}
console.log(word("one"));
