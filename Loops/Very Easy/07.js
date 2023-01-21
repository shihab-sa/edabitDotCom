function arrayValuesTypes(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
       newArr.push( typeof arr[i])
    }
    return newArr
    
}


console.log(arrayValuesTypes([1, 2, "null", []]))
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))