function myStr(str) {

   let strss = str.split(" ")
   
   for (let i = 0; i < strss.length-1; i++){
      let findexv = strss[i]
      let seindexv = strss[i + 1]
      
      if (findexv[findexv.length - 1] === seindexv[0]) {
         return true
      }
      else {
         return false
      }
      
   }
   
}
console.log(myStr("Marta appreciated deep perpendicular right trapezoids"));
