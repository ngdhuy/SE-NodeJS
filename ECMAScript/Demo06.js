let a = [];
let b = [];
for(let i = 0; i < 4; i++) {
    a.push(i);
    b.push(() => i);
}

console.log(a);

console.log(b);
console.log(b.map(x => x()));