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
Object.defineProperty(person, 'height', { value: 190, enumerable: false });
console.log(person);

for (const key in person) {
    console.log(key);
    //age- only enumarable property
};

console.log(JSON.stringify(person));