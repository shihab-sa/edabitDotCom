/*
একটা string ফাকা আছে কি ভাবে বুঝবে, প্রথমে চেক করব তার অতিরিক্ত স্পেস আছে কি না, থাকলে trim()
 দিয়ে ফাকা স্থান রিমুভ করে দিব, দেন str.length দিয়ে চেক করব, 0 দেখালে তার মানে ফাকা
*/
function isEmpty(str){
   
    if(str.trim().length ===0 ){
        return true
    }
    else{
        return false
    }

}

console.log(isEmpty(""));
console.log(isEmpty("sss"));
console.log(isEmpty(""));