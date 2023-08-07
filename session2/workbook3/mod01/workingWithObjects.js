let car = {
    color: "black",
    make: "toyota",
    model: "xhr",
    year: 2020
};

console.log(car.color);
console.log(car["year"]);

function printCar(c) {
    console.log("Color: " + c.color);
    console.log("Make: " + c.make);
}

printCar(car);

function printSpecificField(c1, field) {
    console.log(c1[field]);
}

printSpecificField(car, "year");