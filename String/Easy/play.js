function detectWord(str) {
    
    let newStr = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toString().toLowerCase()) {
            newStr += str[i]
        }
    }

    return newStr
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));