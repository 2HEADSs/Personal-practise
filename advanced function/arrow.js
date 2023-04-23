const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        // function getFullName - same as  const getFullName = function();
        const getFullName = function () {
            return this.firstName + ' ' + this.lastName
        }
        console.log(`Hello, my name is ${getFullName()}`);
        //Hello, my name is undefined undefined - it is called without context:
        //getFullName() - just global invokation
        console.log(`Hello, my name is ${getFullName()}`);

    }
}
person.introduce();