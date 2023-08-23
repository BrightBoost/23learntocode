try {
    connnsole.log("Your order is being processed!");
}
catch (err) {
    console.log(err.message);
}

console.log("moving on")
let x = new Error("whoops");
try {
    throw new Error("OOOH NOO!");
} catch(err) {
    console.log("oh no. another one.")
}
console.log("nothing weird");