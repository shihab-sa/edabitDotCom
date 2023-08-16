/*

একটি array এর ভিতরে নাম অনেক string আছে,
 সেগুলো কে রান করে দেখাও প্রত্যেকটি single character 


 */

 function numInStr(arr){
   
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            console.log(arr[i][j])
        }
    }
}
numInStr(["shihab", "a","shihab"]); //➞ ["1a", "2b"]
