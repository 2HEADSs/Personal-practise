let dog = {
    name: 'Generic name',
    makeSound() {
        console.log(`${this.name} bark!!!`);
    }
};

//make prototype of object Argus
let argus = Object.create(dog);
console.log(argus);
dog.makeSound(); //Generic name bark!!!
console.log('---------');
argus.makeSound(); //Generic name bark!!!
argus.name = 'Argus';
argus.makeSound(); //Argus bark!!!