class Car {
    constructor(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
}

let c = new Car("iq", "hyandai", 2003);
for(let key in c) {
    console.log(key + " : " + c[key]);
}