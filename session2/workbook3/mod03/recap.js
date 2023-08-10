let kids = ["Jonas", "Gaia", "Bobby"];

for(let kid of kids){
    // kids.push("new"); infinite loop
    console.log(kid);
}

for(let i = 0; i < kids.length; i++){
    console.log(kids[i]);
}