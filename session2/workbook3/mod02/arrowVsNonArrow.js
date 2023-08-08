function doubleTheValue(x) {
    return x * 2;
}

let doubleValue = function(x) {
    return x * 2;
};

let result = doubleValue(3);
console.log(result);

let doubleValueArrowStyle1 = (x) => {
    return x * 2;
};

// when there is only one parameter, you can omit the ( and )
let doubleValueArrowStyle2 = x => {
    return x * 2;
};

// when there is only one statement in the body, you can omit {,} and the return keyword
let doubleValueArrowStyle3 = x => x * 2;


// another example

function displayValues(x, y) {
    console.log(x);
    console.log(y);
}

let displayValuesAnonymously = function(x, y) {
    console.log(x);
    console.log(y);
};

// more than one param and more than one statement, so cannot be further simplified
let displayValuesArrow = (x, y) => {
    console.log(x);
    console.log(y);
};

displayValuesArrow("arrow", "function");

// one more example
function displayValue(value) {
    console.log(value);
}

let displayValueAnonymously = function(value) {
    console.log(value);
};

let displayValueArrow = value => console.log(value);
displayValueArrow("hello!");