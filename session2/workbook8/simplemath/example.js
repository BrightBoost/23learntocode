function countTotalLetters(word) {
    return word.length;
}

console.log(countTotalLetters(false));

// normal js function with same name twice

function add1(x, y) {
    console.log("first");
}
function add1(x, y, z) {
    console.log("second");
}

add1("test", 3)