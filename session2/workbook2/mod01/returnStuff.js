function add(x, y) {
    return x + y;
}

function sayHi(name) {
    console.log("Hi", name);
    // return "Hi " + name;
}

function displayEvenNr(nr) {
    if(nr % 2 == 0) {
        console.log("Nr is even:", nr);
    } else {
        console.log("Nr is odd:", nr);
    }
    return "surprise";
}

let result = add(5, 6);
let greeting = sayHi("Felicia");

console.log("value:", result);
console.log("value:", greeting);

displayEvenNr(4);
displayEvenNr(5);

let outcome = displayEvenNr(6);
console.log(outcome);