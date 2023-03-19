// Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true


// ======================  way 1 ==============================
console.log('way 1');

function divisible(num){
    if(num%100 == 0){
        return true       // Big 0(1) Time complexity
    }
    else{
        return false
    }
    

}


console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));




// ======================  way 2 ==============================

console.log('way 02');

function divisible(n){
    return (n % 100 === 0 )? true : false
}


console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));




// ======================  way 3 ==============================

console.log('way 03');


let divisible3 = num => num % 100 === 0 
console.log(divisible3(1));
console.log(divisible3(1000));
console.log(divisible3(100));





// ======================  way 4 ==============================

console.log('way 04');


function divisible4(n){

    return n !== 0 && n % 100 ===0 

}

console.log(divisible4(1));
console.log(divisible4(1000));
console.log(divisible4(100));


