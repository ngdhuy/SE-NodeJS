const obj = { par: 3 }; 
// obj = 4; // TypeError 
obj.par = 4;
// Object.freeze(obj);
Object.freeze()
// obj.par = 10; // TypeError
obj.mt = 3;
Object.seal(obj); 
// obj.newParam = 3 
console.log(obj);
