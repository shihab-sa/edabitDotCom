function recurIndex(str) {
  let newObj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (newObj[char]) {
      return {
        [char]: [newObj[char], i],
      };
    }
    newObj[char] = i;
  }
  return newObj;
}

console.log(recurIndex("YXZXYTUVXWV"));
