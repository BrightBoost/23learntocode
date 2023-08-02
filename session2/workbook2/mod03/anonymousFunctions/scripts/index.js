window.onload = function() {
    const sayHiBtn = document.getElementById("sayHiBtn");
    sayHiBtn.onclick = onSayHiBtnClick;
    console.log("test");
    // sayHiBtn.onclick = function() {
    //     alert("Hi from here!");
    // }; 
};

function onSayHiBtnClick() {
    alert("Hi!!");
    let x = function() {
        console.log("ugh what?");
    };
    x();
    function y() {
        console.log("normal function");
    }
    y();
   // x = 5;
    x();
} 