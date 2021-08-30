function flat(arr, depth=0) {
  if (depth === 0) {
    return arr;
  }
  let res = [];
  arr.forEach(i => {
    if (i instanceof Array) {
      res = res.concat(flat(i,depth - 1))
    } else {
      res = res.concat(i)
    }
  });
  return res
}
console.log(flat([1,1,[12,[123]]],1))