let person = {
    name: 'Ivan',
    age: 23,
    heighr: 178
};

let personPrororype = Object.getPrototypeOf(person);
personPrororype.weight = 100;
console.log(person);
console.log(person.weight);
