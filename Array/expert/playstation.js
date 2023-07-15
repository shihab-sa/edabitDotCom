

function myFun(str){

    let charCount = {}
    for(let i=0; i<str.length; i++){
        let char = str[i]
        if(charCount[char]){
            return { [char]:[charCount[char],i] }  
        }
        charCount[char] = i + 10
             
    }

}


console.log(myFun("DXTDXTXDTXD"))



/*
let char = {
    "s":0,
    "h":1
}

console.log(char["s"])

*/