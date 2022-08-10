// Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true


function divisible(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
    

}


console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));