class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };

    set diameter(diameter) {
        return this.radius = diameter / 2
    }
};

let firstCircle = new Circle(2);
console.log(`Radius = ${firstCircle.radius}`);
console.log(`Diameter = ${firstCircle.diameter}`);
firstCircle.radius = 12;
console.log(`Radius = ${firstCircle.radius}`);
console.log(`Diameter = ${firstCircle.diameter}`);
//set dimeter via set 
firstCircle.diameter = 10;
console.log(`Diameter = ${firstCircle.diameter}`);
console.log(`Radius = ${firstCircle.radius}`);



