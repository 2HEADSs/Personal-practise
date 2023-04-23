//Global context
function random() {
    console.log(this == global);
    
    //dom
    console.log(this == window);
    return Math.random();
}

random();
//global invokation