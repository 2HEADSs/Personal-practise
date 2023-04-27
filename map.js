let demoMap = new Map();

demoMap.set('name', 'Ivan');
demoMap.set('age', 23);
console.log(demoMap);
console.log('---------------');

console.log(demoMap.get('name'));
console.log(demoMap.get('age'));

console.log('---------------');
demoMap.set('age', 21);
console.log(demoMap);
console.log('---------------');

console.log(demoMap.keys());
console.log(demoMap.values());
console.log(demoMap.entries());
console.log('---------------');

demoMap.set(1, 'One');
console.log(demoMap);