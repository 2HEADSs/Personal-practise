let demoMap = new Map();

demoMap.set('name', 'Ivan');
demoMap.set('age', 23);
console.log(demoMap);
console.log('---------------');

console.log(demoMap.get('name'));
console.log(demoMap.get('age'));
console.log('----------------------------------->changing property');
demoMap.set('age', 21);

console.log(demoMap);
console.log('----------------------------------->same as object');

console.log(demoMap.keys());
console.log(demoMap.values());
console.log(demoMap.entries());
console.log('----------------------------------->number as key');

demoMap.set(1, 'One');
console.log(demoMap);
console.log('----------------------------------->Object as key');
demoMap.set({ gender: 'male' }, true)
console.log(demoMap);
