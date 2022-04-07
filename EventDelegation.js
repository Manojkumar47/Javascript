


/*Event Delegate can be achived by Event Bubbling*/

//Behaviour pattern
//Event bubbling
//Not all event will bubble ex : blur, onfocus

document.querySelector("ul").addEventListener('click',(e)=>{
    console.log('Event Delegation'+e.target.id);
});

