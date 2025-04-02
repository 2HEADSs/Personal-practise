function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
};

Animal.prototype.activity = function () {
    console.log(`${this.name} - eat`);
};

let dog = new Animal('Dog', 'Kiara', 4);
console.log(dog);

function Dog(name, age) {
    Animal.call(this, 'Dog', name, age);
}

//the prototype of cat object will have protype which is prototype of Animal
Dog.prototype = Object.create(Animal.prototype);

let argus = new Dog('Argus', 1);
console.log(argus);
argus.activity();
console.log(argus.type);