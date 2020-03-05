let vals1 = [];
let vals2 = [];
 for (let x = 0; x < 4; x += 1){  
    vals1.push(x);
    vals2.push(() => x); 
}
console.log(vals1);  
console.log(vals2);  
console.log(vals2.map(x => x())); 




