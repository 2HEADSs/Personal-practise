class Person {
    constructor(name) {
        this.name = name
    };

    sayHello() {
        console.log(' Hy ' + this.name);
    }
};

let personsNames = [
    'Ivan',
    'Peter',
    'Stefan',
];

let persons = personsNames.map(x => new Person(x));

console.log(persons[0]);
persons.forEach(x => x.sayHello())