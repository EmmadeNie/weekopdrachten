console.log("Hello World")
let log = console.log;
let a = 5;
let b = 50;

let a1 = (function () { return 5 })()
let b1 = function () { return 50 }

log(a1)
log(b1)

let a2 = function (num) { return 5 + num }
let b2 = function () { return 50 }

b2 = 20

log(a2(b2))
log("break")

let a3 = 100;
setTimeout(function () { a3++; log(a3) }, 2000) //A
log(a3) //B
setTimeout(function () { log(a3, "hello"), 1000 }) //C
log(a3, "hello") //D

log("hello") //E

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Yo!");
    }, 0)
});
log(p)

setTimeout(function () {
    log(p);
}, 3000)

log(p)
p.then(function (val) {
    log(val)
})




