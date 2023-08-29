"use strict";
let imageFiles =
    ["but_it_runs.jpg", "MyPain.jpg"];

$(document).ready(() => {
    $("#imageNamesDDL").append($("<option>", {
        text: "Select one..."
    }));
    for (let i = 0; i < imageFiles.length; i++) {
        $("#imageNamesDDL").append($("<option>", {
            value: imageFiles[i],
            text: imageFiles[i]
        }));
    }
    // doesn't select select one
    // $("#imageNamesDDL :first-child").before($("<option>", {
    //     text: "Select one..."
    // }));
    $("#imageNamesDDL").on("change", onImageNamesDDLChange);
});
// window.onload = function () {
//     let imageNamesDDL = document.getElementById("imageNamesDDL");
//     let selectOneOption = new Option("Select one...");
//     imageNamesDDL.appendChild(selectOneOption);
//     let imageFilesLength = imageFiles.length;
//     for (let i = 0; i < imageFilesLength; i++) {
//         let theOption = new Option(imageFiles[i]);
//         imageNamesDDL.appendChild(theOption);
//     }
//     imageNamesDDL.onchange = onImageNamesDDLChange;
// };

function onImageNamesDDLChange() {
    // let imageNamesDDL =
    //     document.getElementById("imageNamesDDL");
    let imageNamesDDL = $("#imageNamesDDL");
    let selectedFile = imageNamesDDL.val();
    if (selectedFile == "") return;
    let p = $("<p>").text($(selectedFile));
    let imageDiv = $("#imageDiv");
    
    let newButton = $("<input>", {
        type: "button",
        value: "Delete Image File"
    });
    newButton.on("click", function () {
        // 'this' refers to the element the event occurred on
        $(this).parent().remove();
    });
    let newDiv = $("<div>").append(p);
    newDiv.append($("<br>"));
    newDiv.append(newButton);
    newDiv.append($("<img>", {
        src: "images/" + selectedFile,
        alt: "",
        width: "300"
    }));
    imageDiv.append(newDiv);

    // if (imageNamesDDL.selectedIndex == 0) return;
    // let selectedFile = imageNamesDDL.value;
    // let imageDiv = document.getElementById("imageDiv");
    // let newDiv = document.createElement("div");
    //let newPara = document.createElement("p");
    //let textNode = document.createTextNode(selectedFile);
    //newPara.appendChild(textNode);
    // let newImage = document.createElement("img");
    // newImage.src = "images/" + selectedFile;
    // // newImage.alt = selectedFile;
    // // newImage.style = "width:300px";
    // let br = document.createElement("br");
    // // let newButton = document.createElement("input");
    // // newButton.type = "button";
    // // newButton.value = "Delete Image";
    // newDiv.appendChild(newPara);
    // newDiv.appendChild(newImage);
    // newDiv.appendChild(br);
    // newDiv.appendChild(newButton);
    // imageDiv.appendChild(newDiv);
    // newButton.onclick = function () {
    //     // 'this' refers to the element the event occurred on
    //     let thisButton = this;
    //     let myParentDiv = thisButton.parentElement;
    //     imageDiv.removeChild(myParentDiv);
    // }
}
