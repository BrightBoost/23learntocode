window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = sayHello;
}

function sayHello() {
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "Hello world!";
}