
/* Polyfill file is used to over come browser unsupported method. example create custom Bind function*/
let name={
    firstname:"Manoj",
    lastname:"Kumar"
}
i=0;
let printName=function(){
    console.log(i++ +":"+this.firstname+" "+this.lastname);
}

// Build in Bind function
let printNameByBind=printName.bind(name);
printNameByBind();

//Creating custom Bind function
Function.prototype.mybind=function(...args){
    let obj=this;
    return function(){
        obj.call(args[0]);
    }
};
let printNameCustomBind=printName.mybind(name);
printNameCustomBind();

// Verify Bind added to Function scope
let printName2=function(){
    console.log(i++ +":"+this.firstname+" "+this.lastname);
}
let printNameCustomBind1=printName2.mybind(name);
printNameCustomBind1();

