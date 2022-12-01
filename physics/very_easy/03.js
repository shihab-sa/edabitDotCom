// Sum of Resistance in Series Circuits


function seriesResistance(arr){
    let inSate = 0
    let result = arr.reduce((acc,cv)=>acc+cv, inSate)
    return result

}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));