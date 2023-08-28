window.onload = () => {
    $("#btn").click(onClickBtn);
}

function onClickBtn() {
    let name = $("#name");
    // let name2 = document.getElementById("name");
    console.dir(name[0].value);
    console.log(name.val());
    // console.dir(name2);
}