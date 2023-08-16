/*
    str.length - 1 কেন দিতে হয় ব্যাক্ষা দাও

    index 0 1 2 
    but length 3 


মনে করেন একটি Array তে প্রথম index এর ভ্যালু জানতে হবে
 এবং পরবর্তী index এর ভ্যালু জানতে হবে!  
index[i] , nIndex[i+1] এই দুইটিকে console.log() করলে, 
 undefined এক্সটা একটা ভ্যালু আসে! এটা যাতে
 না আসে সে জন্যে আমরা str.length - 1 করে দেই!

*/


// 1st step


function lenT(arr){

    for(let i=0; i<arr.length; i++){
        let cw = arr[i]
        let nextW = arr[i+1]
         console.log(cw,nextW);
    }

}
lenT([2,4,5])




// 2nd Step 



function lenT(arr){

    for(let i=0; i<arr.length-1; i++){
        let cw = arr[i]
        let nextW = arr[i+1]

        console.log("cw",cw);
        console.log("nextW",nextW);
    }

}
lenT([2,4,5])
