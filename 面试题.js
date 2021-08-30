// 原型链继承

function Animal(name) {
  this.color = [];
  this.name = ''
}

function Dog() {
}
Dog.prototype = new Animal()

// 构造函数实现继承

class Animal2 {
  constructor() {
    this.color = ''
  }
}

function Dog2() {
  Animal.call(dog2)
}

// 数组去重
function uniq = (arr) => {
  return arr.filter((i, index, array) => {
    return array.indexOf(i) === index
  })
}
// es6 数组去重
function uniqES6 = (arr) => [...new Set(arr)]

// 深拷贝 不考虑函数和内置对象
function deepCopy = (obj) => {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    // 忽略原型链
    if (obj.hasOwnProperty(i)) {
      if (typeof obj[i] === 'object') {
        newObj[i] = deepCopy(obj(i))
      } else {
        newObj[i] = obj(i)
      }
    }

  }
  return newObj;
}

// 发布订阅

class Publish {
  constructor() {
    this.stack = []
  }
  register() {

  }
  on() {

  }
  unRegister() {

  }

}

