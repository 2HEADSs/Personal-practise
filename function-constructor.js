function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    //This will create function for each instance
    // this.greed = function () {
    //     console.log(`Hello! My name is ${this.name}`);
    // };
};

let firstPerson = new Person('Pesho', 23, 169);
let secondPerson = new Person('Gosho', 31, 177);

console.log(firstPerson);

Person.prototype.greed = function () {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
}

firstPerson.greed();
secondPerson.greed();