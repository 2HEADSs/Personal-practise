class Person {
    constructor(name) {
        this.name = name
    }
};

let personsNames = [
    'Ivan',
    'Peter',
    'Stefan',
];

let persons = personsNames.map(x => new Person(x));

console.log(persons[0]);