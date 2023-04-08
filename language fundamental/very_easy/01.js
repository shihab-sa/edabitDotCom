// How Edabit Works
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// Notes
// The returned string must be in all lowercase letters.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.How Edabit Works
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// Notes
// The returned string must be in all lowercase letters.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.



// ==================================  way 01  =============================  
console.log('way 01')
function hello(){
    return 'www.edabit.com'
}
console.log(hello());




// ==================================  way 02  =============================  
console.log('way 02')

const hello2=()=>{
    return 'www.edabit.com'
}
console.log(`The message is ${hello2()}`)




// ==================================  way 03  =============================  
console.log('way 03')



let hello3 = function(){
    return 'www.edabit.com'
}
let msg = hello3()
console.log(`The Message is ${msg}`)




// ==================================  way 04  =============================  
console.log('way 04')

// Define the function called hello using a tagged template literal
function hello4() {
    // Define the tag function to convert the string to lowercase
    function tag(strings, ...values) {
      return strings.reduce((result, string, index) => {
        result += string + (values[index] || "");
        return result;
      }, "").toLowerCase();
    }
  
    // Use the tag function to create the string "hello edabit.com" in lowercase letters
    return tag`hello ${"edabit.com"}`;
  }
  
  // Call the function and log the result to the console
  console.log(hello4());




  

// ==================================  way 05  =============================  
console.log('way 05')

// Define the function called hello using array join and split
function hello() {
    // Use array join and split to create the string "hello edabit.com" in lowercase letters
    return ["hello", "edabit.com"].join(" ").toLowerCase();
}
  
// Call the function and log the result to the console
console.log(hello());






// ==================================  way 06  =============================  
console.log('way 06')


// Define the function called hello using string interpolation and destructuring
function hello() {
    // Use string interpolation and destructuring to create the string "hello edabit.com" in lowercase letters
    const [first, second] = ["hello", "edabit.com"];
    return `${first} ${second}`.toLowerCase();
  }
  
  // Call the function and log the result to the console
  console.log(hello());


  // ==================================  way 07  =============================  
console.log('way 07')


  // Define the function called hello using a template literal and the spread operator
function hello() {
    // Use a template literal and the spread operator to create the string "hello edabit.com" in lowercase letters
    return `${[...'hello edabit.com'].join('')}`.toLowerCase();
  }
  
  // Call the function and log the result to the console
  console.log(hello());



  // ==================================  way 08  =============================  
  console.log('way 08')

  // Define the function called hello using a string array and map
function hello() {
    // Use a string array and map to create the string "hello edabit.com" in lowercase letters
    return ["hello", "edabit.com"].map(str => str.toLowerCase()).join(" ");
  }
  
  // Call the function and log the result to the console
  console.log(hello());
  



  
  // ==================================  way 09  =============================  
  console.log('way 09')


  // Define the function called hello using a ternary operator and string concatenation
function hello() {
    // Use a ternary operator and string concatenation to create the string "hello edabit.com" in lowercase letters
    const str1 = true ? "hello" : "";
    const str2 = true ? "edabit.com" : "";
    return str1.toLowerCase() + " " + str2.toLowerCase();
  }
  
  // Call the function and log the result to the console
  console.log(hello());
  
  
  
  
  