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
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

let shortest = (s1, s2) => s1 == s2;

let longer = (s1, s2) => {
    if (str1 == str2) {
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

// i want to print the names of all the characters that have the hobby "Sailing"
spongebobCharacters2
    .filter(sC => sC.hobbies.find(hobby => hobby == "Sailing") != undefined)
    .forEach(sC => console.log(sC.name));

//michaels - better than mine ^
spongebobCharacters2
    .filter(character => character.hobbies.includes("Sailing"))
    .forEach(character => console.log(character.name));

// james
spongebobCharacters2.forEach(x => {
    if (x.hobbies.findIndex(hobby => hobby == "Sailing") != -1) {
        console.log(x.name)
    }
});

// mandana
let spongeBobCharacterWithHobbySailingArray = spongebobCharacters2.filter(spongebobCharacter => spongebobCharacter.hobbies.includes("Sailing"));
console.log(spongeBobCharacterWithHobbySailingArray);
spongeBobCharacterWithHobbySailingArray.forEach(spongeBobCharacterWithHobbySailing => console.log(spongeBobCharacterWithHobbySailing.name));
// foreach.hobbies(console.log(spongebobCharacters2.name));

// please print the second hobby of characters with the word "retired" in their job
spongebobCharacters2.filter(sC => sC.job.toLowerCase().includes("retired superhero ")).forEach(sC => console.log(sC.hobbies[1]));
// easier: please print the hobbies of a character with the name Patrick Star (using foreach)
spongebobCharacters2.find(sC => sC.name == "Patrick Star").hobbies.forEach(hobby => console.log(hobby));

// for in for objects - loop over properties
let obj = {
    name: "Jonas",
    age: 5,
    hobbies: ["nintento", "lego", "teasing his sister"]
};

for (let prop in obj) {
    console.log(prop + ": " + obj[prop]);
}

// for in for arrays (less common) - loop over indices
let arrColors = ["blue", "pink", "yellow"];
for (let i in arrColors) {
    if (arrColors[i] == "pink") {
        console.log("found pink at " + i)
    }
    console.log(i);
}

// for of - looping over elements in an array
let arrHobbies = ["programming", "coding", "learning"];
for (let hobby of arrHobbies) {
    console.log(hobby);
}

// for of is not for objects, can only be used on iterable elements such as arrays
// for(let x of obj) {
//     console.log(x);
// }

//https://jsonplaceholder.typicode.com/users

// complex data structures

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

// I want to print all the names in this object using what we talked about.
for(let user of users) {
    console.log(user.name);
}

// I want to loop through the first object and see all the properties available
showAllPropValues(users[0]);

function showAllPropValues(obj) {
    for(let prop in obj) {
        if(typeof obj[prop] == "object") {
            showAllPropValues(obj[prop]);
        } else {
            console.log(prop + ": " + obj[prop]);
        }
    }
}