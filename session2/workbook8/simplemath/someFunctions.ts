function add(nr1: number, nr2: number): number {
    return nr1 + nr2;
}
 
let result: number = add (3, 4);

function displayResult(result: number): void {
    console.log("The result it: " + result);
}

let x = displayResult(result);
console.log(x);

// how about arrow functions, james asked
let f = (x: string, y: string): string => x + y;