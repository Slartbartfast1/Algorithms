var permutation = function (s) {
  const arr = s.split('');
  let len = arr.length;
  if (len === 1) {
    return [s]
  }
  let res = [];
  function swap(array, ...items) {
    if (array.length === 2) {
      res.push(items.join('') + array.join(''))
      [array[0], array[1]] = [array[1], array[0]];
       res.push(items.join('')+array.join(''))
       return 
    } else {
      for (let i = 0; i < array.length; i++) {
        let newStr = s.slice(0, i) + s.slice(i + 1);
        let temp = [...array];
        let item = temp[i]
        temp.splice(i, 1)
          swap(temp, item, ...items)
      }
    }
  }
  swap(arr, '')
  return [...new Set(res)];
};

console.log(permutation('abc'))