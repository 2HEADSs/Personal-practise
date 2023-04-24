function counterBuilder() {
    let counter = 0;

    return function inner() {
        counter++;
        console.log(counter);
    };
};

let counter = counterBuilder();
counter();
counter();
counter();
counter();
counter();
//because fn inner keep the reference of the 
//counter variable which is moved to the heap