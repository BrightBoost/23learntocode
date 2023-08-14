"use strict";
var i = 1;
var i = 2;
console.log(i);

const j = 2;

function sorry() {
    console.log("sorry");
}

sorry();

let result = 0;

function calcResult(a, b) {
    return a + b;
}

function displayResult() {
    console.log(result);
}

result = calcResult(1, 2);
result = calcResult(2, 3);
displayResult(8);