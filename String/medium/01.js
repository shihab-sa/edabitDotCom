// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

// ===============================  way 01  =====================
console.log("way 01")

function generation(number,char){

    if(number==2 && char=="f"){
        return 'granddaughter'
    }
    else if(number==2 && char == 'm'){
        return 'male'
    }
    else if(number==1 && char=="m"){
        return 'son'
    }
    else if(number==1 && char=='f'){
        return 'granddougher'
    }
    else if(number==3 && char =='m'){
        return 'great grandson'
    }
    else if(number ==3 && char =='f'){
        return 'great granddaughter'
    }
    else if(number==0 && char =="m"){
        return 'me'
    }
    else if(number==0 && char=="f"){
        return 'me'
    }
    else if(number==-1 && char =="m"){
        return 'father'
    }
    else if(number ==-1 && char =="f"){
        return 'mother'
    }
    else if(number==-2 && char =="m"){
        return 'grandfather'
    }
    else if(number ==-2 && char =="f"){
        return 'grandmother'
    }
    else if(number==-3 && char =="m"){
        return 'great grandfather'
    }
    else if(number==-3 && char =="f"){
        return 'great grandmother'
    }

}


console.log(generation(2, "f"))
console.log(generation(-3, "m"));
console.log(generation(1, "f"));







// ===============================  way 02  =====================
console.log("way 02")



function generation(x, y) {
    const MALE = 'm';
    const FEMALE = 'f';
    const generations = {
      '-3': { [MALE]: 'great grandfather', [FEMALE]: 'great grandmother' },
      '-2': { [MALE]: 'grandfather', [FEMALE]: 'grandmother' },
      '-1': { [MALE]: 'father', [FEMALE]: 'mother' },
      '0': { [MALE]: 'me!', [FEMALE]: 'me!' },
      '1': { [MALE]: 'son', [FEMALE]: 'daughter' },
      '2': { [MALE]: 'grandson', [FEMALE]: 'granddaughter' },
      '3': { [MALE]: 'great grandson', [FEMALE]: 'great granddaughter' }
    };
  
    if (x === 0) {
      return 'me!';
    }
  
    const gender = y === MALE ? MALE : FEMALE;
    const absX = Math.abs(x);
    const generation = generations[absX];
  
    if (!generation) {
      return 'unknown generation';
    }
  
    return generation[gender];
  }


console.log(generation(2, "f")); // "granddaughter"
console.log(generation(-3, "m")); // "great grandfather"
console.log(generation(1, "f")); // "daughter"
console.log(generation(0, "m")); // "me!"
console.log(generation(4, "m")); // "unknown generation"

  