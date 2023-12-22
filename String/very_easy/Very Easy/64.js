// Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
// evenOddString("mubashir") ➞ "mbsi uahr"
// // Letters at even indexes = "mbsi"
// // Letters at odd indexes = "uahr"
// // Join both strings with a space

// evenOddString("edabit") ➞ "eai dbt"

// evenOddString("airforce") ➞ "aroc ifre"
// Notes
// There will be no space in the given string.


function evenOddString(str){

   let evenChar = ""
   let oddChar = ""
   for(let i=0; i<str.length; i++){
      if(i%2==0){
        evenChar += str[i]
      }
      else{
        oddChar += str[i]
      }
   }   

   return `"${evenChar} ${oddChar}"`

}

console.log(evenOddString("mubashir"));
console.log(evenOddString("edabit"));