let person = {
    name: "Pesho",
    age: 20
};
// console.log(Object.getOwnPropertyDescriptors(person));
let internalNamePrperies = Object.getOwnPropertyDescriptor(person, 'name');
