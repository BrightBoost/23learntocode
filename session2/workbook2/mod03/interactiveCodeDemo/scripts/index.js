"use strict";

window.onload = function() {
    const estimateTotalCost = document.getElementById("estimateTotalCost");
    estimateTotalCost.onclick = onEstimateTotalCostClicked;
};

function onEstimateTotalCostClicked() {
    // get variables
    const days = document.getElementById("days");
    const options = document.querySelectorAll(".options");
    const age = document.querySelector("input[name='age']:checked");
    const carRental = document.getElementById("carRental");
    const optionsPrice = document.getElementById("options");
    const surcharge = document.getElementById("surcharge");
    const totalDue = document.getElementById("totalDue");
    let basicCharge = 0;
    let optionCharges = 0;
    let ageCharges = 0;
    let totalDueNum = 0;

    // reset output
    resetOutput();

    // basic charge
    let numDays = Number(days.value);
    basicCharge = numDays * 29.99;

    // careful with this though
    // if the html order changes, you gets surprise behavior
    if(options[0].checked) {
        optionCharges += 3.95;
    }
    if(options[1].checked) {
        optionCharges += 2.95;
    }
    if(options[2].checked) {
        optionCharges += 2.95;
    }

    // surcharge - under 25
    if(document.querySelector("input[value='yes']:checked")) {
        ageCharges = 0.3 * basicCharge;
    }
    
    // total amount due
    totalDueNum = basicCharge + ageCharges + optionCharges * numDays;
    surcharge.innerHTML += `$${ageCharges.toFixed(2)}`;
    carRental.innerHTML += `$${basicCharge.toFixed(2)}`;
    optionsPrice.innerHTML += `$${(optionCharges * numDays).toFixed(2)}`;
    totalDue.innerHTML += `$${totalDueNum.toFixed(2)}`;


}

function resetOutput() {
    document.getElementById("carRental").innerHTML = "Car rental: ";
    document.getElementById("options").innerHTML = "Options: ";
    document.getElementById("surcharge").innerHTML = "Surcharge: ";
    document.getElementById("totalDue").innerHTML = "Total Due: ";
}