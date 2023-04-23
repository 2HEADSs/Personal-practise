//Call
function introduce() {
    console.log(`Hello my name is ${this.name}`);
};
introduce(); //global invokation - this.name ==undefined

let personObject = {
    name: 'Pesho'
};

introduce.call(personObject); //invoke using call;
