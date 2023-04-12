 
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
    honk3(){  //Object method notation
        console.log('Beep beep for last time!');

    }
}

car.honk();
car.honk2();
car.honk3();