// Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1

// word("two") ➞ 2

// word("nine") ➞ 9
// Notes
// All numbers will be single digit positive integers.




function word(n){
    switch(n){
        case "one":
            return 1

            case "two":
                return 2 

                case "three":
                    return 3 

                    case "four":
                        return 4 

                        case "five":
                            return 5 

                            case "six":
                                return 6

                                case "seven":
                                    return 7

            default:
                return "not found a number"
    }
}

console.log(word("seven"));