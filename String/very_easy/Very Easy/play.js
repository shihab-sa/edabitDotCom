

function amazingEdabit(str){
let word = str.split(" ")
  
 for(let i=0; i<word.length; i++){
  if(word[i] === "edabit"){
    return word.join(" ")
  }
  else if(word[i] !== "amazing"){
    return `${word.slice(0,2)} not ${word.slice(2)}`
  }
 }
} 

console.log(amazingEdabit("edabit is amazing.") );
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing.") );