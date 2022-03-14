


//// Step 02 ================================


//Array.sort()

// let arr = [1,2,3,4,5,6,3,5,6,10]
// let res = arr.sort((a,b)=>{
//     if(a>b){
//         return 1 
//     }
//     else if(a<b){
//         return -1
//     }
//     else{
//         return 0 
//     }
// })
// console.log(res);



// let arr = [-100,29,20,33,44,10,-200,23,90,100]

// let result = arr.sort((a,b)=>{
//     if(a>b){
//         return 1 
//     }
//     else if(a<b){
//         return -1
//     }
//     else{
//         return 0 
//     }
// })

// console.log(result);


let arr = [
    {
        id:11,
        age:23
    },
    {
        id:23,
        age:33
    },{
        id:44,
        age:50
    },
    {
        id:100,
        age:70
    }
]

let MyAge = arr.sort((a,b)=>{
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(MyAge);