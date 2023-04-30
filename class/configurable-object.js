// 'use strict'

let person = {
    name: "Pesho",
    age: 20
};

let personCar = {
    brand: 'Oper',
    model: 'Astra'
}
let clonedPerson = { ...person };
let clonedPerson2 = Object.assign({}, person, personCar);
//{ name: 'Pesho', age: 20, brand: 'Oper', model: 'Astra' };

console.log(clonedPerson2);

Object.freeze(person);
person.weight = 80;
person.name = 'Gosho'

console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));

