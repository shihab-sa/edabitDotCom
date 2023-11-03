function countTrue(arr) {
  let res = arr.filter((x) => x === true);
  return res.length;
}

console.log(countTrue([true, false, false, true, false, false, true, true]));
