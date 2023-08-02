window.onload = function() {
    const handleDoor = document.getElementById("handleDoor");
    handleDoor.onclick = onHandleDoorClick;
    const opa = document.getElementById("opa");
    opa.onclick = onOpaChecked;

}

function onHandleDoorClick() {
    const knockKnock = document.getElementById("knockKnock");

    if(knockKnock.checked) {
        console.log("Come in, opa");
    } else {
        console.log("Can't open the door, mom is in the shower.");
    }

    openDoor(knockKnock.checked);
}

function onOpaChecked() {
    const knockKnock = document.getElementById("knockKnock");
    const opa = document.getElementById("opa");

    if(opa.checked) {
        knockKnock.checked = true;
    } else {
        knockKnock.checked = false;
    }
    openDoor(knockKnock.checked);

}

function openDoor(open) {
    const openImg = document.getElementById("open");
    const closedImg = document.getElementById("closed");

    if(open) {
        openImg.style.display = "block";
        closedImg.style.display = "none";
    } else {
        openImg.style.display = "none";
        closedImg.style.display = "block";
    }

}