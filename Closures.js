
/*Closures*/
//Variable have access to outside enviroment
//Function currying


/***********Simple closure 5 FOR loop*************/
//Using the IIFE solution
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}

/***********Simple closure 4 FOR loop (var vs let)*************/
for (var index = 1; index <= 3; index++) {
            //Vs
    //for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
    //Intresting error
    //c();
}


/***********Simple closure 3 with parameter(Function currying)*************/
function closure3(message) {
 _func=function func(name) {
    console.log(message + " " + name);
  }
  return _func;
}
//1
closure3('Hey')('closure 3');
//2
let _funVar=closure3('Hey');
_funVar('closure 3');
//3
let _funVars=closure3;
_funVars('Hey')('closure 3');


/***********Simple closure 2*************/
name = "closure 2";
function closure2() {
 _func=function func() {
    console.log(message + " " + name);
  }
  const message = "Hi..";
  _func();
}
//1
closure2();
//2
let __2=closure2();
__2;
//3
let __3=closure2;
__3();

/***********Simple closure 1*************/
text = "closure 1";
function closure1() {
 _func=function func() {
    console.log(message + " " + text);
  }
  const message = "Hai";
  return _func;
}

//1
closure1()();
//2
_2=closure1();
_2();
//3
let _3=closure1;
_3()();
