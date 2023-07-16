// Radians to Degrees
// Create a function that takes an angle in radians and returns the corresponding angle in degrees.

// Examples
// radiansToDegrees(1) ➞ 57.29577951308232

// radiansToDegrees(20) ➞ 1145.9155902616465

// radiansToDegrees(50) ➞ 2864.7889756541163
// Notes
// N/A


function radiansToDegrees(ran){
    //Degrees = Radians × 180 / π or Math.PI 
    let deg = ran  * 180 / 3.1416
    return deg
    

}

console.log(radiansToDegrees(1)); // ➞ 57.29577951308232
console.log(radiansToDegrees(20) );//➞ 1145.9155902616465
console.log(radiansToDegrees(50)); //➞ 2864.7889756541163