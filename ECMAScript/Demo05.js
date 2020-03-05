function a()
{
    function b(){
        console.log(x);
    }
}

//b(); -> x is not defined
let x = 4;
b();
let t = b();
t;