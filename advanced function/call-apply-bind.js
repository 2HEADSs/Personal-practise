//Call
function introduceShorter() {
    console.log(`Hello my name is ${this.name}`);
};
introduceShorter(); //global invokation - this.name ==undefined

let personObject = {
    name: 'Pesho'
};

introduceShorter.call(personObject); //invoke using call;
introduceShorter.call({ name: 'Goran' }); //invoke using call and set this.name = 'Gosho';


introduceShorter.apply(personObject); //invoke using apply;
introduceShorter.apply({ name: 'Ivan' }); //invoke using apply and set this.name = 'Gosho';

console.log('longer');


function introduceLonger(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName} my name is ${this.name}`);
};

introduceLonger('Stefan', 'Ivanov'); //global invokation - this.name ==undefined

console.log('---------------------');
introduceLonger.call(personObject, 'Purvan', 'Dragoev'); //invoke using call;
introduceLonger.call({ name: 'Mihail' }, 'Sotir', 'Papazov'); //invoke using call and set this.name = 'Gosho';

introduceShorter.apply(personObject, ['Drago', 'Rusinov']); //invoke using apply;
introduceShorter.apply({ name: 'Niki' }, ['Antoniq', 'Chavdarova']); //invoke using apply and set this.name = 'Gosho';


//Bind
console.log('---BIND------');
let supermen = {
    name: 'Supermen'
};

introduceLonger.bind(supermen, 'Ivanka', 'Stoqnowa') //bind returns new function

let superIntroduction = introduceLonger.bind(supermen, 'Lois', 'Lane') ;
superIntroduction(); //log the result 