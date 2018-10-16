var myArray = ["value1", "value2", "value3"];

// 用Set构造器将Array转换为Set
var mySet = new Set(myArray);

// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySet]); //[ 'value1', 'value2', 'value3' ]
