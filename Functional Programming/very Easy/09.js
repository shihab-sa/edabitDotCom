// Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"

// keyboardMistakes("DUBL1N") ➞ "DUBLIN"

// keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"


function keyboardMistakes(str){

    let correctThe = ""

    for(let i=0; i<str.length; i++){
        switch(str[i]){
            case "4":
                correctThe += 'A'
                break;

                case "5":
                correctThe += 'S'
                break;

                case "0":
                correctThe += 'O'
                break;


                case "1":
                correctThe += 'L'
                break;

                default : 
                correctThe += str[i]
                break
        }
    }

    return correctThe
}
console.log(keyboardMistakes("MUB45H1R"));