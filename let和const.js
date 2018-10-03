// {
// var a=100
// let b=200
// }
// console.log(a)//100
// console.log(b)//ReferenceError: b is not defined


//用var声明i的for循环
// var a=[];
// for(var i=0;i<3;i++){
//     a[i]=function(){
//         console.log(i)
//     }
// }
// a[2]();    //3
// //用let声明i的for循环
// var a=[];
// for(let i=0;i<3;i++){
//     a[i]=function(){
//         console.log(i)
//     }
// }
// a[2]();     //2

//
// for(let i=0;i<3;i++){
//     let i='hello'
//     console.log(i)
// }
//
// //hello
// //hello
// //hello


// console.log(a)
// var a;//undefined
//
// console.log(b)
// let b;//ReferenceError: a is not defined


// var a=100;
// {
//
//     a=200           //ReferenceError: a is not defined
//     console.log(a)  //ReferenceError: a is not defined
//     let a
//     a=300
//     console.log(a)//300
// }
//
// function bar(x=y,y=2){
//     return[x,y]
// }
//
// bar()//ReferenceError: y is not defined


// console.log(typeof c)
// let c=1;   //ReferenceError: c is not defined
//
// console.log(typeof c)

// //报错
// function foo(){
//     let a=0;
//     var a=1;
// }
// //重复声明函数也会报错
// function func(arg){
//     let arg
// }

// //const声明的值不能改变
// const a=1;
// a=2//TypeError: Assignment to constant variable.

// const a//SyntaxError: Missing initializer in const declaration

// const foo={}
// foo.prop=100
// console.log(foo.prop) //100
//
// foo={}//TypeError: Assignment to constant variable.

var constantize=(obj)=>{
    Object.freeze(obj)
    Object.freeze(obj).forEach((key,i)=>{
        if(typeof obj[key]==='object'){
            constantize(obj[key])
        }
    })
}
