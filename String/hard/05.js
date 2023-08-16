/*
"Marta appreciated deep perpendicular right trapezoids" এমন টেক্সট string কে 
word, sentence, single character  এ রুপান্তর করতে গেলে Array তে রুপান্তর হয়ে যায় 
      "" ====> []
*/

  


// single character of Array 
function str1(str){
    return str.split('')
}
console.log(str1("Marta appreciated deep perpendicular right trapezoids"))



// word of Array 
function str2(str){
    return str.split(' ')
}
console.log(str2("Marta appreciated deep perpendicular right trapezoids"))





// sentence of Array 
function str3(str){
    return str.split()
}
console.log(str3("Marta appreciated deep perpendicular right trapezoids"))

