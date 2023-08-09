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

let namesCharacters = spongebobCharacters.map(character => character.name);
console.log(namesCharacters);

let lengthOfNamesCharacters = namesCharacters.map(name => name.length);
console.log(lengthOfNamesCharacters);