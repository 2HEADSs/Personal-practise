//Global context
function random() {
    console.log(this == global);

    // //dom
    // console.log(this == window);
    // return Math.random();
}

//global invokation
random();

//Object context
let obj = {
    name: 'Peter',
    greed() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
//object/method  invokation
obj.greed()