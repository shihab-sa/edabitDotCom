// First Class, Second Class and Third Class Levers

function determineLever(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]=="e"){
            return 'First'
        }
        else if(arr[i]=="l"){
            return 'second'
        }
        else if(arr[i]=='l'){
            return 'third'
        }
       
    }

}

console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));