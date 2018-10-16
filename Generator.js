function* gen(x) {
    var y = yield x + 2
    return y
}

var g = gen(1)
// console.log(g.next());
console.log(g.next(2));
console.log(g.next(12));


function* gen2(x) {
    try {
        var y = yield x + 2
    }
    catch(e) {
        console.log(e)
    }
}
var g2=gen2(1);
console.log(g2.next());
g2.throw('error')
