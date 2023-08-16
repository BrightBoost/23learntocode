"use strict";
let imageFiles =
    ["but_it_runs.jpg", "MyPain.jpg"];
window.onload = function () {
    let imageNamesDDL = document.getElementById("imageNamesDDL");
    let selectOneOption = new Option("Select one...");
    imageNamesDDL.appendChild(selectOneOption);
    let imageFilesLength = imageFiles.length;
    for (let i = 0; i < imageFilesLength; i++) {
        let theOption = new Option(imageFiles[i]);
        imageNamesDDL.appendChild(theOption);
    }
    imageNamesDDL.onchange = onImageNamesDDLChange;
};
function onImageNamesDDLChange() {
    let imageNamesDDL =
        document.getElementById("imageNamesDDL");
    if (imageNamesDDL.selectedIndex == 0) return;
    let selectedFile = imageNamesDDL.value;
    let imageDiv = document.getElementById("imageDiv");
    let newDiv = document.createElement("div");
    let newPara = document.createElement("p");
    let textNode = document.createTextNode(selectedFile);
    newPara.appendChild(textNode);
    let newImage = document.createElement("img");
    newImage.src = "images/" + selectedFile;
    newImage.alt = selectedFile;
    newImage.style = "width:300px";
    let br = document.createElement("br");
    let newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "Delete Image";
    newDiv.appendChild(newPara);
    newDiv.appendChild(newImage);
    newDiv.appendChild(br);
    newDiv.appendChild(newButton);
    imageDiv.appendChild(newDiv);
    newButton.onclick = function () {
        // 'this' refers to the element the event occurred on
        let thisButton = this;
        let myParentDiv = thisButton.parentElement;
        imageDiv.removeChild(myParentDiv);
    }
}
