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
    onLoadShowImages();
    imageNamesDDL.onchange = onImageNamesDDLChange;
};

function onLoadShowImages() {
    let imageDiv = document.getElementById("imageDiv");

    let imagesFilesLength = imageFiles.length;
    for (let i = 0; i < imagesFilesLength; i++) {
        let newDiv = document.createElement("div");

        let newImage = document.createElement("img");
        newImage.src = "images/" + imageFiles[i];
        newImage.alt = imageFiles[i];
        newImage.style = "width:300px";

        let br = document.createElement("br");

        let newButton = document.createElement("input");
        newButton.type = "button";
        newButton.value = "Delete Image";

        newDiv.appendChild(newImage);
        newDiv.appendChild(br);
        newDiv.appendChild(newButton);
        imageDiv.appendChild(newDiv);

        newButton.onclick = function () {
            // 'this' refers to the element the event occurred on
            let myParentDiv = this.parentElement;
            imageDiv.removeChild(myParentDiv);
        }
    }


}


function onImageNamesDDLChange() {
    let imageNamesDDL =
        document.getElementById("imageNamesDDL");
    if (imageNamesDDL.selectedIndex == 0) return;
    let selectedFile = imageNamesDDL.value;
    let imageDiv = document.getElementById("imageDiv");
    let newDiv = document.createElement("div");

    let newImage = document.createElement("img");
    newImage.src = "images/" + selectedFile;
    newImage.alt = selectedFile;
    newImage.style = "width:300px";

    let br = document.createElement("br");

    let newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "Delete Image";

    newDiv.appendChild(newImage);
    newDiv.appendChild(br);
    newDiv.appendChild(newButton);
    imageDiv.appendChild(newDiv);

    newButton.onclick = function () {
        // 'this' refers to the element the event occurred on
        let myParentDiv = this.parentElement;
        imageDiv.removeChild(myParentDiv);
    }
}
