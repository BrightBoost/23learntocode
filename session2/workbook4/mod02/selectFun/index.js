
window.onload = () => {
    document.getElementById("reset").onclick = onResetClicked;
    populateDropDown();
}

function populateDropDown() {
    const genderField = document.getElementById("genderField");
    // add empty option
    genderField.appendChild(new Option("select one...", ""));
    // add loop of options
    let optionsForSelect = [{ label: "Male", value: "M" }, { label: "Female", value: "F" }, { label: "Other", value: "X" }]
    for (let o of optionsForSelect) {
        genderField.appendChild(new Option(o.label, o.value));

    }
}


function onResetClicked() {
    const genderField = document.getElementById("genderField");
    console.log(genderField.value);

    if (genderField.value == "") {
        console.log('It equals ""');
    }

    genderField.value = ""; // reset to "Select One…"


}

