let greeting: string = "Hello world!";
console.log(greeting);

// arrays typescript

let nrs: number[] = [3, 4, 5, 6, 12, 13, 34, 56];
let nr: number = nrs[3];

let anotherSyntaxSameThing: Array<number> = [3, 4, 5, 6, 12, 13, 34, 56];

// can you do an array of arrays?
let jamesQuestion: Array<number[]> = [[1]];
let jamesQuestion2: Array<Array<number>> = [[1]];
let jamesQuestion3: Array<Array<Array<number>>> = [[[2], [2]], [[2], [2]]];

// for of loops will know the type

let nr3: number = 1;
let nr4: number = 1;
let sum: number = nr3 + nr4;
