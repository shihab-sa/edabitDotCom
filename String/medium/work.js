function findNemo(sentence) {
    const words = sentence.split(' ');
    
  let findIndex = words.findIndex((w) => w == "Nemo")
  if (findIndex !== -1) {
    let indx = findIndex + 1
    return `i found nemo at ${indx}`
  }
  else {
    return "I can't find Nemo :("
  }
  
  
   
  }
  
  console.log(findNemo("I am finding Nemo !")); // Output: "I found Nemo at 4!"
  console.log(findNemo("Nemo is me")); // Output: "I found Nemo at 1!"
  console.log(findNemo("I Nemo am")); // Output: "I found Nemo at 2!"
  console.log(findNemo("No Nem here")); // Output: "I can't find Nemo :("
  