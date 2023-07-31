"use strict";
function doSomething(x) {
    makeYourLifeUnnecessarilyHard(x);
}

function makeYourLifeUnnecessarilyHard(func) {
    func("hate me yet?");
}

function logBlabla(txt) {
    console.log("blabla" + txt);
}

doSomething(logBlabla);
logBlabla("I bet you do");