let foo = {
    x : 10,
    f(y) {
        return 2 * y;
    }
}

console.log(foo.x)
console.log(foo.f(3))