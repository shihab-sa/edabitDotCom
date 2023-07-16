function isSmooth(arr){
    let word = arr.toLowerCase().split(" ")
    
    for(let i=0; i<word.length-1; i++){
          let cw = word[i]
          let nw = word[i+1]
          
          if(cw[cw.length-1] == nw[0]){
            return true
          }
          
    }
    return false
    
}
 



console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));// ➞ true

console.log(isSmooth("Someone is outside the doorway")); //➞ false

console.log(isSmooth("She eats super righteously"));// ➞ true