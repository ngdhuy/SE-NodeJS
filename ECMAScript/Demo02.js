// Demo 02 - VAR vs LET VS CONST

const a = 8;
var b = 10; 
let c = 999;

console.log(a);
console.log(b);
console.log(c);
console.log("-----------------------");

// a = 1; --> Constant variable is not changed value
b = 20;
c = 1999;

console.log(a);
console.log(b);
console.log(c);
console.log("-----------------------");

if(a % 2 == 0) {
    b = 30;
    c = 2999;
    
    var d = "hello";
    let e = "world";

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log("-----------------------");
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("-----------------------");