function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
};

Animal.prototype.activity = function () {
    console.log(`${this.name} - eat`);
};

let cat = new Animal('Cat', 'Garry', 4);
console.log(cat);

function Cat(name, age) {
    Animal.call(this, 'Cat', name, age);
}

//the prototype of cat object will have protype which is prototype of Animal
Cat.prototype = Object.create(Animal.prototype)