"use strict";
var x = "3";
x = -x;
console.log(x + 3);

var y = "-3";
y = +y;
console.log(y);

var test = 6 == 6;
if (test) {
    console.log("yup true");
}

// lazy evalution proof
var name = "blahblah";

if (name == "blahblah" && age == 3) {
    console.log("not sure");
} else {
    console.log("what will happen")
}


