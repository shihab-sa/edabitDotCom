function potatoes(str) {
  const lowercaseStr = str.toLowerCase();
  const target = "potato"

  // for single 
  let index = lowercaseStr.indexOf(target)

  //for duplicate 
  let index1 = lowercaseStr.lastIndexOf(target)
  //let count = 0 


  console.log('the indexof = ',index)
  console.log('the lastindex of is =',index1)
}



console.log(potatoes("potato"));  // ➞ 1
console.log(potatoes("potatopotato"));  // ➞ 2
console.log(potatoes("potatoapplepotato"));  //➞ 1