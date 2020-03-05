const obj = { att : 3 }
// obj = 4 --> Cannot change value of constance object

console.log(obj)
obj.att = 4
obj.met = 5
console.log(obj)
console.log(obj.att)

// Object.freeze will lock value and structure of object
Object.freeze(obj)
obj.att = 5
obj.method = 6
console.log(obj)

// Object.Seal will lock Structure of Object but Object can change value
Object.seal(obj)
obj.att = 8
obj.method = 6
console.log(obj)