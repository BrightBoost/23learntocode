let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];
let numTeams = teamMembers.length;
for (let i = 0; i < numTeams; i++) {
    console.log("Team " + (i + 1));
    let numMembers = teamMembers[i].length;
    for (let j = 0; j < numMembers; j++) {
        console.log(teamMembers[i][j]);
    }
}

let nightmare = [
    [["values", "examples"], ["more", "blabla", "not the same length"]],
    [["values", "examples"], ["more"], ["more", "tree", "blabla"]]
]