function curry (fn,...args){
  if (args.length === fn.length) return fn(...args);
  return (..._args) => curry(fn,...args,..._args)
}

function volume(l, h, w,s) {
  return l * h * w*s
}
const a = curry(volume,1, 2,4)

console.log(a(6))