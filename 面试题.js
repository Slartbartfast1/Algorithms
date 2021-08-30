// 原型链继承

function Animal(name){
  this.color = [];
  this.name=''
}

function Dog(){
}
Dog.prototype = new Animal()

// 构造函数实现继承

class Animal2 {
  constructor(){
    this.color = ''
  }
}

function Dog2(){
 Animal.call(dog2)
}