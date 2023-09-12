function countTotalLetters(word: string):number {
    return word.length
}

console.log(countTotalLetters("false"));

// function with same name different parameters: overloading
// why do we need this ugly syntax
// in regular js you can only have the same name once (it overrides other implementations with the same function name)
function add2(x: string, y?: string): void;
function add2(x: number, y: string, z: string): void;

function add2(x: any, y?: any, z: string = "not here"): any {
    if(typeof x == 'number') {
        console.log("function with three params:" + x + y + z)
    } else {
        console.log(x + y);
    }
}

add2("bla", "bla");
add2(1, "bla", "bla");
// add2("bla", "bla", "bla");


