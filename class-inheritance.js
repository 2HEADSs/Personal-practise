class Animal {
    constructor(type, name, age) {
        this.type = type,
            this.name = name,
            this.age = age
    }

    eat() {
        console.log(`${this.name} - eat!`);
    }
};

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age)
    };

    meow() {
        console.log(`${this.name} - meow meow!`);

    }
}


let firstCat = new Cat('Lora', 9);
firstCat.eat();
firstCat.meow();
