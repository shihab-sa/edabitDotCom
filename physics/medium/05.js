

function parallelResistance(arr){
    let r = 0 
    for(let i=0; i<arr.length; i++){
        r += 1/arr[i]
        
    }
    let result = 1/r 
    return result.toFixed(2)

}

console.log(parallelResistance([6, 3]));
console.log(parallelResistance([10, 20, 10]));