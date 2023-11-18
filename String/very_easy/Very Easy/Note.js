//

return str ? "true" : "false";

//

return `something ${str}`;

//

str.length;

//

str.length === 0;

//

parseInt(str);

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
// Return false if no spaces are found or if the input string is empty
return false;

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
