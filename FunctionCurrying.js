

/* Function currying can be achived using nested function and bind
taking all arguments at one time, takes the first one and return a new function that takes the second one and 
returns a new function which takes the third one, and so forth, until all arguments have been fulfilled*/

//TYPE 1
//Using Bind keyword
let multiply = function (x, y) {
  console.log(`Multiple : ${x} * ${y} =`, x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
let multiplyByFive = multiply.bind(this,5);
multiplyByFive(5);

//TYPE 2 
//Using Nested function
let add = function (x) {
  return function(y){
    console.log(`Add : ${x} + ${y} =`, x + y);
  }
};
//Second parameter is useless
let sum=add(5);
sum(5);

let sum2=add;
sum2(2)(3);

//Will not work
sum2(3,3);

