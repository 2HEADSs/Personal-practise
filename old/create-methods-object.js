
let car = {
    model: 'BMW',
    year: '2015',
    facelift: true,
    honk: function () { //method with function expression
        console.log('Beep beep');
    },
    honk2: () => { //method with arrow function
        console.log('Beep beep again!');
    },
    honk3() {  //Object method notation
        console.log('Beep beep for last time!');

    }
}
car['honk']()
console.log('------------- ');
car.honk();
car.honk2();
car.honk3();

//Object as function library
function division(a, b) {
    return a / b
};


let calc = {
    sum: function (a, b) {
        return a + b
    },
    multiplication: function (a, b) {
        return a * b
    },
    substraction: function (a, b) {
        return a - b
    },
    division,
};

console.log(calc.sum(10, 5));
console.log(calc.division(10, 5));