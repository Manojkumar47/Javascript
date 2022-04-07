/*Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution*/

//Global scope
//Function scope
//Block scope
console.count();
a=1;
var b=2;
let c=3;
const d=4;

function a_Print(){
console.log(a);
console.log(b);
console.log(c);
console.log(d);
a=1;
var b=2;
let c=3;
const d=4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
}

a_Print();
