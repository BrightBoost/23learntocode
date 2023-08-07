class Car {
    constructor(color, make, model, year) {
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let car1 = {
    color: "black",
    make: "toyota",
    model: "xhr",
    year: 2020
};

let car3 = new Car("black", "toyota", "xhr", 2020);

let car2 = {
    color: "pink",
    make: "peugeot",
    model: "307",
    year: 2020
};

console.log(car3)