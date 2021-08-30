// call 执行函数并指定this，并传参数

Function.prototype.myCall = (context, ...rest) => {
  let _context = context || window;
  _context.fn = this;
  let args = [];
  for (var i = 0, len = rest.length; i < len; i++) {
    args.push('rest[' + i + ']');
  }
  let result = eval('context.fn(' + args + ')');
  delete _context.fn;
  return result;
}
// apply 参数使用数组传入
Function.prototype.myApply = (context, ...args) => {
  let _context = context || window
  const key = Symbol()
  context[key] = this
  result = context[key](...args })
  delete _context.fn;
  return result
}

// bind
Function.prototype.myBind = (context,...args)=>{
  let that = this;
  return function (...newArgs){
    const result = that.call(context,...args,...newArgs)
    return result; 
  }
}
