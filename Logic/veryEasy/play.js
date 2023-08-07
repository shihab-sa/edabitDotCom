function checkEquality(a,b) {
    return typeof a === typeof 1 && typeof b === typeof 1 ? true : false
}

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1,  1) );

