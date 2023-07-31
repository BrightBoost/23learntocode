// regular, this would break with let
function regularWay() {
    console.log(i);
    console.log("why no error");
    var i = 5;
    console.log(i);

}
regularWay();



// visual to display hoisting, only for var
function whatJavaSriptSees() {
    var i;
    console.log(i);
    console.log("why no error");
    i = 5;
    console.log(i);

}
whatJavaSriptSees();


// it will break with let
function letWay() {
    console.log(i);
    console.log("yay an error");
    let i = 5;
    console.log(i);

}
letWay();