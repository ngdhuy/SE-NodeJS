// let foo = { 
//     toString() {
//              super.toString() + ' with foo!'; 
//      } 
//     };

// foo.toString(); 

let ind = 100;
 let foo = { 
    ['question'+ ind]:'question number ' + ind, 
    ['answer' + ind](x) 
    {    return ind === x;  } }; 
    foo.question100; // “question number 100” foo.answer100(100); 