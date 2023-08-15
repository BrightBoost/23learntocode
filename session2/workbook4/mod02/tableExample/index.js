const spongebobCharactersArray = [
    { name: "SpongeBob SquarePants", job: "Fry Cook at the Krusty Krab"},
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

window.onload = () => {
    populateSpongebobTable();
}

function populateSpongebobTable() {
    // grab the table
    const spongebobCharacters = document.getElementById("spongebobCharacters");

    // loop over the list
    let lengthList = spongebobCharactersArray.length;
    for (let i = 0; i < lengthList; i++) {
        // for every character in the list, add a row
        let row = spongebobCharacters.insertRow(-1);

        // for every property of the character, add a table celll
        let cell1 = row.insertCell(0);
        cell1.innerHTML = spongebobCharactersArray[i].name;

        let cell2 = row.insertCell(1);
        cell2.innerHTML = spongebobCharactersArray[i].job;
    }
    let experimentalRow = document.createElement("tr");
    let experimentalTableCell = document.createElement("td");
    experimentalTableCell.innerHTML = "test";
    experimentalRow.appendChild(experimentalTableCell);
    spongebobCharacters.appendChild(experimentalRow);

}