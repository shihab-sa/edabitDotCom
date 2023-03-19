//  =================================  very Easy  =================================================================
// ----------------------------------- 01 -------------------------------------------------------------------------
// Upvotes vs Downvotes


// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0




function getVoteCount(obj){

    return obj.upvotes - obj.downvotes
  
}

console.log(getVoteCount({ upvotes:13,downvotes:0 }))
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));



// let obj = {
//     x:12,
//     y:0,

//     dow(){
//         console.log(this.x - this.y);
//     }

// }
// obj.dow()
