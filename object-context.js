let car = {
    model: 'BMW',
    year: '2015',
    facelift: true,
    honk: function () {
        console.log(`${this.model}: Beep Beep`);
    },
};

let singleHonk = car.honk;// lead to same reference as car.honk;
singleHonk();//this is 'undefinde' because singleHonk fdon't have model
// undefined: Beep Beep


car.honk();
// BMW: Beep Beep


let otherCar = {
    model: 'Lada'
};

otherCar.beep = singleHonk;
// otherCr.beep = car.hon; same as upper;

otherCar.beep(); //here we already have context
//Lada: Beep Beep