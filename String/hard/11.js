
/*
  1 থেকে  < 9 এর দিকে যাওয়া!
*/

function numInStr(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] >= 1 && arr[i][j] <= 9){
                newArr.push(arr[i])
            }
        }
    }

    return newArr


}
console.log(numInStr(["1a", "a", "2b", "b6"])); //➞ ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); //➞ ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]) );//➞ ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); //➞ ["test1"]
