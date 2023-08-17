window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
    const allInputTextFields =
        document.querySelectorAll("input[type='text']");
    let allInputTextFieldsLength = allInputTextFields.length;
    for (let i = 0; i < allInputTextFieldsLength; i++) {
        // hook up logic for EACH input field's events
        // using anonymous functions for event handlers
        allInputTextFields[i].addEventListener("focus", function () { this.style.backgroundColor = "yellow"; });
        allInputTextFields[i].addEventListener("blur", function () { this.style.backgroundColor = ""; });

        // allInputTextFields[i].addEventListener("blur", () => this.style.backgroundColor = "");
    }
}

// function changeColor(color) {
//     this.style.backgroundColor = color;

// }