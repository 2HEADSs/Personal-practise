//Call
function introduceShorter() {
    console.log(`Hello my name is ${this.name}`);
};
introduceShorter(); //global invokation - this.name ==undefined

let personObject = {
    name: 'Pesho'
};

introduceShorter.call(personObject); //invoke using call;
introduceShorter.call({ name: 'Gosho' }); //invoke using call and set this.name = 'Gosho';


introduceShorter.apply(personObject); //invoke using apply;
introduceShorter.apply({ name: 'Gosho' }); //invoke using apply and set this.name = 'Gosho';

console.log('longer');


function introduceLonger(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName} my name is ${this.name}`);
};

introduceLonger('Stefan', 'Ivanov'); //global invokation - this.name ==undefined

console.log('---------------------');
introduceLonger.call(personObject, 'Stefan', 'Ivanov'); //invoke using call;
introduceLonger.call({ name: 'Gosho' }, 'Stefan', 'Ivanov'); //invoke using call and set this.name = 'Gosho';

introduceShorter.apply(personObject, ['Stefan', 'Ivanov']); //invoke using apply;
introduceShorter.apply({ name: 'Gosho' }, ['Stefan', 'Ivanov' ]); //invoke using apply and set this.name = 'Gosho';