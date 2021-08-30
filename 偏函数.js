// 固定一个函数的其他参数，生成一个更小的函数
function partial (fn,...args){
  return (...rest)=>{
    fn(...args,...rest)
  }
}