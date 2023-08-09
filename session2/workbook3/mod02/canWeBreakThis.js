let names = ["kidA", "kidB", "kidC"];

for(let name of names){
    names.push("new");
    console.log(name);
}

console.log(names);

// yes we can break this, infinite loop unlocked!

