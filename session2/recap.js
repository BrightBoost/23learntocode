// arrow functions
// (parameters) => { body }
// single => single statement;

function add(x, y) {
    let result = x + y;
    return result;
}

let func = (x, y) => x + y;

let func1 = (x, y) => {
    let result = x + y;
    return result;
};

let result1 = func(2, 4);
let result2 = func1(2, 4);

function same(a, b) {
    if(a == b) {
        return true;
    } else {
        return false;
    }
}

let shortest = (s1, s2) => s1 == s2;

let longer = (s1, s2) => {
    if(str1 == str2) {
        return true;
    } else {
        return false;
    }
};

let same1 = shortest("a", "b");
let same2 = longer("a", "a");

// filter and find
// happen on arrays
let arr = [2, 3, 43, 233, 445, 6];
// foreach that prints numbers bigger than 200
arr.filter(x => x > 200).forEach(x => console.log(x));
arr.forEach(x => x > 200 ? console.log(x) : ""); // one line without filter
console.log(x);

// find number that is equal to 445 - find returns 1 value
let res1 = arr.find(x => x == 445);
console.log(res1);

// filter returns an array with all the results
let res2 = arr.filter(x => x == 445);
console.log(res2);

let firstBiggerThan10 = arr.find(x => x > 10);
let allBiggerThan10 = arr.filter(x => x > 10);



// nested filters and finds

const spongebobCharacters = [
    { name: "SpongeBob SquarePants", job: "Fry Cook at the Krusty Krab" },
    { name: "Patrick Star", job: "Unemployed" },
    { name: "Squidward Tentacles", job: "Cashier at the Krusty Krab" },
    { name: "Mr. Krabs", job: "Owner of the Krusty Krab" },
    { name: "Sandy Cheeks", job: "Scientist and Inventor" },
    { name: "Plankton", job: "Owner of the Chum Bucket" },
    { name: "Mrs. Puff", job: "Boating School Teacher" },
    { name: "Larry the Lobster", job: "Lifeguard at Goo Lagoon" },
    { name: "Mermaid Man", job: "Retired Superhero" },
    { name: "Barnacle Boy", job: "Retired Superhero Sidekick" },
    { name: "Pearl Krabs", job: "High School Student" },
    { name: "Karen", job: "Chum Bucket Computer/Wife of Plankton" }
];

// find a character with the name Karen
let characterWithNameKaren = spongebobCharacters.find(character => character.name == "Karen");

// find all characters with Superhero in the Job title
let superheroArray = spongebobCharacters.filter(character => character.job.toLowerCase().includes("superhero"));

console.log(characterWithNameKaren.name + ": " + characterWithNameKaren.job);
console.log(superheroArray);

// arrow functions for arrays and objects
superheroArray.forEach(superhero => console.log(superhero.name));

// i want to print the names of all the characters that have the hobby "Sailing"
const spongebobCharacters2 = [
    { name: "SpongeBob SquarePants", job: "Fry Cook at the Krusty Krab", hobbies: ["Jellyfishing", "Blowing Bubbles", "Karate"] },
    { name: "Patrick Star", job: "Unemployed", hobbies: ["Sleeping", "Eating", "Watching TV"] },
    { name: "Squidward Tentacles", job: "Cashier at the Krusty Krab", hobbies: ["Playing the Clarinet", "Painting", "Dancing"] },
    { name: "Mr. Krabs", job: "Owner of the Krusty Krab", hobbies: ["Counting Money", "Collecting Rare Coins", "Sailing"] },
    { name: "Sandy Cheeks", job: "Scientist and Inventor", hobbies: ["Karate", "Inventing", "Rodeo"] },
    { name: "Plankton", job: "Owner of the Chum Bucket", hobbies: ["Inventing", "Plotting", "Computer Programming"] },
    { name: "Mrs. Puff", job: "Boating School Teacher", hobbies: ["Gardening", "Sailing", "Knitting"] },
    { name: "Larry the Lobster", job: "Lifeguard at Goo Lagoon", hobbies: ["Weightlifting", "Swimming", "Surfing"] },
    { name: "Mermaid Man", job: "Retired Superhero", hobbies: ["Fighting Crime", "Watching TV", "Autograph Signing"] },
    { name: "Barnacle Boy", job: "Retired Superhero Sidekick", hobbies: ["Fighting Crime", "Reading", "Fishing"] },
    { name: "Pearl Krabs", job: "High School Student", hobbies: ["Shopping", "Cheerleading", "Listening to Music"] },
    { name: "Karen", job: "Chum Bucket Computer/Wife of Plankton", hobbies: ["Computing", "Assisting Plankton", "Sarcasm"] }
];


// for in

// for of

// complex data structures