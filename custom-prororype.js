let dog = {
    name: 'Generic name',
    makeSound() {
        console.log(`${this.name} bark!!!`);
    }
};

//make prororype of object Argus
let argus = Object.create(dog);
console.log(argus);
argus.makeSound()