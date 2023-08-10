let obj1 = {
    name: "Ezra",
    age: 19
};

console.log(obj1.name + " " + obj1.age);

let obj2 = {
    first: {
        name: "Ezra",
        age: 19
    },
    second: {
        name: "Ian",
        age: 18
    },
};

console.log(obj2.second.name + " " + obj2.second.age);

let obj3 = {
    names: ["Ezra", "Ian", "Sid", "Eli"],
    ages: [19, 18, 17, 16]
};

console.log(obj3.names[3] + " " + obj3.ages[3]);

let items = [
    {
        descr: "TV",
        prices: [500, 475]
    },
    {
        descr: "Radio",
        prices: [40, 35]
    },
];

console.log(items[1].descr + " " + items[1].prices[0]);