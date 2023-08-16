/*
একটি array এর ভিতরে "shihab" নামটা দেওয়া আছে, এটাকে তুমি এমন output  দেখাও, 
যেটা প্রত্যেকটা single character এর জন্যে, shihab নামটা ততবার দেখাবে

*/


function numInStr(arr){
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            console.log(arr[i]);
        }
    }
}
numInStr(["shihab"]); 
