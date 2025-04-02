let person = {
    name: "Pesho",
    age: 20
};
// console.log(Object.getOwnPropertyDescriptors(person));
let internalNamePrperies = Object.getOwnPropertyDescriptor(person, 'name');

//hide and also can not be itterate
Object.defineProperty(person, 'name', { enumerable: false });
console.log(person); //{age:20}

//add new property
Object.defineProperty(person, 'height', { value: 190, enumerable: false, writable: false });
console.log(person);

for (const key in person) {
    console.log(key);
    //age- only enumarable property
};

console.log(JSON.stringify(person));

Object.defineProperties(person, {
    name: {
        enumerable: true
    },
    age: {
        value: 23,
        configurable: false
    }
});

console.log(person);

//Add getter
Object.defineProperty(person, 'info', {
    get: function () {
        return `${this.name} - ${this.age}`
    }
});

console.log(person.info);