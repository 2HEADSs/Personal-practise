class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };
};

let firstCircle = new Circle(2);
console.log(`Radius = ${firstCircle.radius}`);
console.log(`Diameter = ${firstCircle.diameter}`);