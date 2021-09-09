
class MyPromise {
  // 三个状态 reject fullfilled pending
  // 
  constructor(callback) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;
    try {
      callback(callback)
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value) {
    if (this.state === 'pending') {
      this.state = 'fullFilled'
    }
    this.value = value;
  }
  reject(reason) {
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if (this.state === "pending") {
      this.reason = reason;
      this.state = "rejected";
    }
    
  }
then(onFullFilled, onReject){
  
  return new MyPromise(()=>{
    if (this.state === 'pending') {
      onFullFilled(this.value);
    }
    if (this.state === 'rejected') {
      onReject(this.reason)
    }
  })
}
}

const a = new MyPromise(() => { throw new Error(1111122222)})
a
  .then(() => {
    console.log(111)
  },()=>console.log(4444))