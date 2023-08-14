window.onload = () => {
    document.getElementById("screenStuff").onclick = onClickScreenStuffBtn;
}

function onClickScreenStuffBtn() {
    console.log(screen.width);
    console.log(screen.availWidth);
}