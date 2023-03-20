
// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720



//============================= way 1 
console.log('way 01');


function sumPolygon(n){

    return (n - 2) * 180

}


console.log(sumPolygon(3)); // ➞ 180
console.log(sumPolygon(4)); // ➞ 360
console.log(sumPolygon(6));  // ➞ 720




//============================= way 2
console.log('way 02');



function sumPolygon2(n){

    let sum = 0

    for(let i=0; i<n; i++){
        sum += 180 - (360 / n)
    }

    return sum

}

console.log(sumPolygon2(3)); // ➞ 180
console.log(sumPolygon2(4)); // ➞ 360
console.log(sumPolygon2(6));  // ➞ 720
