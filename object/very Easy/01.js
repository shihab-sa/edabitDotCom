//  =================================  very Easy  =================================================================
// ----------------------------------- 01 -------------------------------------------------------------------------
// Upvotes vs Downvotes


// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// =================  way 01 ================
console.log('way 01')


function getVoteCount(obj){

    return obj.upvotes - obj.downvotes
  
}

console.log(getVoteCount({ upvotes:13,downvotes:0 }))
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));






// =================  way 02 ================
console.log('way 02')



function getVoteCount1({upvotes,downvotes}){

    return upvotes - downvotes
  
}

console.log(getVoteCount1({ upvotes:13,downvotes:0 }))
console.log(getVoteCount1({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount1({ upvotes: 132, downvotes: 132 }));








// =================  way 02 ================
console.log('way 03')



let getVoteCount2=({upvotes,downvotes}) => upvotes - downvotes

console.log(getVoteCount2({ upvotes:13,downvotes:0 }))
console.log(getVoteCount2({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount2({ upvotes: 132, downvotes: 132 }));





