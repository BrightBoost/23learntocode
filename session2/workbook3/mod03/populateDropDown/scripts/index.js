window.onload = function () {
    // load the dropdown list
    populateStatesDropDown();
    document.getElementById("statesList").onchange = onChangeState;
};

function populateStatesDropDown() {
    let states = ["Alabama", "Alaska", "Arizona"];
    let abbrev = ["AL", "AK", "AZ"];
    const statesList = document.getElementById("statesList");
    let length = states.length;
    for (let i = 0; i < length; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = states[i];
        theOption.value = abbrev[i];
        // append the option as a child of (inside) the 
        // select element
        statesList.appendChild(theOption);
    }
}

function onChangeState() {
    const statesList = document.getElementById("statesList");
    if (statesList.selectedIndex >= 0) {
        let text =
            statesList.options[statesList.selectedIndex].innerText;
        let value = statesList.value;
        alert("Selected: " + text + "\nValue: " + value);
        //statesList.remove(statesList.selectedIndex);
        statesList.options[statesList.selectedIndex] = null;
    } else {
        alert(`${"You need to pick a state!".toUpperCase()}`);
    }

}