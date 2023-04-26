class Cat {
    isHungty = true;
    constructor(name) {
        this.name = name
    };
    meow() {
        console.log(`${this.name}: Meow`);
    };

    static mustFeed(cat) {
        if (cat.isHungty) {
            console.log(`This cat should be feed!`);
        } else {
            console.log(`This cat is fine!`);

        }
    }
};

let firstCat = new Cat('Navcho');
console.log(firstCat);
firstCat.meow();
let secondCat = new Cat('Lora');
secondCat.isHungty = false

Cat.mustFeed(firstCat)
Cat.mustFeed(secondCat)
