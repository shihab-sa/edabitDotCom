// ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.

// Notes
// Check the Resources tab for more examples.



function myArr(arr){

    return [...arr]

}


console.log(myArr(["eyes", "nose", "lips", "ears"]));