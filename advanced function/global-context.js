//Global context
function random() {
    console.log(`${this == global} random`);

    // //dom
    // console.log(this == window);
    // return Math.random();
}


random();//global invokation

let math = {
    random:random
};

math.random()//method invokation - this is math obj

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

//nested function
function a() {
    function b() {
        function c() {
            function d() {
                console.log(this);
            }
            d()
        }
        c()
    }
    b()
};

a();
