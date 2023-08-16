function numInStr(arr){
    
   let newArr = []
   for(let i=0; i<arr.length; i++){
       for(let j=0; arr[i].length; j++){
           if(isNaN(arr[i][j])){
               newArr.push(arr[i])
           }
       }
       return newArr
   }
   
} 
console.log(numInStr(["1a", "a", "2b", "b"]));