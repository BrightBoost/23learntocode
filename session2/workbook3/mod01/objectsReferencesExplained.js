let obj1 = {
    name: "Terria"
}

function changeObject(obj) {
    obj.name = obj.name + "!";
    console.log("In function: " + obj.name);
}

changeObject(obj1);
console.log("outside function: " + obj1.name);