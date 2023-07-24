


function minMax(arr){
    let maxNum = arr[0]
    let minNum = arr[0]
    let newArr = []

    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
    }

    for(let j=0; j<arr.length; j++){
        if(arr[j] < minNum){
            minNum = arr[j]
        }
    }

    newArr.push(minNum,maxNum)
    return newArr
}
console.log(minMax([1, 2, 3, 4, 5])); //➞ [1, 5]

console.log(minMax([2334454, 5])); //➞ [5, 2334454]

console.log(minMax([1])); //➞ [1, 1]