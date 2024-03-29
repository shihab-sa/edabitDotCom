// return str ? "true" : "false";
// `something ${str}`;
//str.length;
//str.length === 0;
//parseInt(str);
// এই ভাবে চেক করো:  inputString.length > 0
// ফাঁকা string কোন ভ্যালু নাই: inputString[i] === ' '
//

if (inputString.length > 0) {
  // Loop through each character in the string
  for (let i = 0; i < inputString.length; i++) {
    // Check if the current character is a space
    if (inputString[i] === " ") {
      // Return true if a space is found
      return true;
    }
  }
}



// String কোটেশন এর ভিতরে কিছু নাই এর মানে zero

let str = "";
console.log(str.length);

// True

let str = "";
console.log(str.length == 0);

// String কোটেশন এর ভিতরে ফাঁকা আছে মানে এর মানে 1 যতটা ফঁাকা ততটা নাম্বার

let str = " ";
console.log(str.length);

// null = খালি
// undefined = অনির্ধারিত

// str.plit("").join("")

//  if (str.length <= 2) return str;

// space each character by character

function spaceMeOut(str) {
  var spacedString = "";

  for (let i = 0; i < str.length; i++) {
    spacedString += str[i];

    if (i < str.length - 1) {
      spacedString += " ";
    }
  }

  return spacedString;
}

// Examples
console.log(spaceMeOut("space")); // Output: "s p a c e"
console.log(spaceMeOut("far out")); // Output: "f a r   o u t"
console.log(spaceMeOut("elongated musk")); // Output: "e l o n g a t e d   m u s k"

//  if (str.length <= 2) return str;



// data !== undefined এটির অর্থ : 

যদি ডাটা সমান হয় তাহলে
data == undefined 

আর সমান না হয়  তাহলে

data !== undefined


// if (indexOfR !== -1 && urlParts.length > indexOfR + 1)



// Array of string way 

function wordToNumber(word) {
  const wordsArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  const index = wordsArray.indexOf(word);
  
  return index !== -1 ? index : -1;
}

// Examples
console.log(wordToNumber("one"));   // Output: 1
console.log(wordToNumber("two"));   // Output: 2
console.log(wordToNumber("nine"));  // Output: 9
console.log(wordToNumber("invalid")); // Output: -1


// Array of Object way 

function wordToNumber(word) {
  const wordMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
  };

  return wordMap[word] !== undefined ? wordMap[word] : -1;
}

// Examples
console.log(wordToNumber("one"));   // Output: 1
console.log(wordToNumber("two"));   // Output: 2
console.log(wordToNumber("nine"));  // Output: 9
console.log(wordToNumber("invalid")); // Output: -1

 
