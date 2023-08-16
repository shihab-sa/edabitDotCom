/*
   এই বড় sentence থেকে তুমি প্রথম word টার শেষ 
   single character টা বের করবে এবং 
   পরবর্তী word এর প্রথম character টা বের করে নাও

*/


function words(str){
    let wordArray = str.split(" ")
   // console.log(wordArray);

   for(let i=0; i<wordArray.length-1; i++){
      let curretWord = wordArray[i]
      let nextWord = wordArray[i+1]
      
      console.log("last character of all words = ",curretWord[curretWord.length-1]);
      console.log("First character of all words = ",curretWord[0]);
      console.log("First character of all words{Next word} = ", nextWord[0]);
      
   }

}
console.log(words("Marta appreciated deep perpendicular right trapezoids"))