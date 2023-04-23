//Global context
function random() {
    console.log(this == global);

    // //dom
    // console.log(this == window);
    // return Math.random();
}


random();//global invokation

//Object context
let obj = {
    name: 'Peter',
    greed() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

obj.greed() //object/method  invokation

let greed = obj.greed; //copy  only the function by reference
greed() //global invokation

// //DOM Element - must execute in browser
// element.addEventListener('click', function () {
//     console.log(this);
// }) 
//this willl be dom element