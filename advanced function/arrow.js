const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        console.log(this);//here this is person object

        // function getFullName - same as  const getFullName = function();
        const getFullName = function () {
            console.log(this);
            return this.firstName + ' ' + this.lastName
        };

        console.log(`Hello, my name is ${getFullName()}`);
        //Hello, my name is undefined undefined - it is called without context:
        //getFullName() - just global invokation

        const getFullNameArrow = () => {
            console.log(this);//here this is person object
            return this.firstName + ' ' + this.lastName
        };

        console.log(`Hello, my name is ${getFullNameArrow()}`);
        // Hello, my name is Pesho Georgiev - because arrow will use the uper context

    }
}
person.introduce();