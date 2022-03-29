// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// 
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]



function arrayValuesTypes(arr){

    if( typeof arr !== 'number'){
        return arr 
    }
    else if(typeof arr !== 'string' ){
        return arr 
    }
    else if( typeof arr !== null){
        return arr
    }
    else if( typeof arr !== 'array'){
        return arr
    }
    else if ( typeof arr !== 'boolean'){
        return arr
    }
    else if ( typeof arr !== undefined){
        return arr 
    }
    else if( typeof arr !== 'object'){
        return arr
    }

}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));