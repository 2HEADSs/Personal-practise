function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
};

let firstPerson = new Person('Pesho', 23, 178);
console.log(firstPerson);