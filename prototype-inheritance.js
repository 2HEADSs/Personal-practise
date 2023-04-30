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
    Animal.call(this,)
}