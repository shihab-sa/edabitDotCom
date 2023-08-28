

function valueAt(arr,value) {

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == arr.indexOf(Math.floor(value))){
            return arr[i]
        }
        
    }
    return undefined
    
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));