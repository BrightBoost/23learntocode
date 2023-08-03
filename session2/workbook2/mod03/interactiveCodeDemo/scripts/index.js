"use strict";

window.onload = function () {
    const estimateTotalCost = document.getElementById("estimateTotalCost");
    estimateTotalCost.onclick = onEstimateTotalCostClicked;
};

function onEstimateTotalCostClicked() {
    // get variables
    const days = document.getElementById("days");
    const carRental = document.getElementById("carRental");
    const optionsPrice = document.getElementById("options");
    const surcharge = document.getElementById("surcharge");
    const totalDue = document.getElementById("totalDue");
    
    if(isNaN(days.value) || days.value < 0) {
        alert("Please enter a valid nr for days");
        return;
    }

    // reset output
    resetOutput();

    // calculate charges
    let numDays = Number(days.value);
    let basicCharge = numDays * 29.99;
    let optionCharges = calcTotalOptions(numDays);
    let ageCharges = calcSurcharge(basicCharge);

    // total amount due
    let totalDueNum = basicCharge + ageCharges + optionCharges;

    // display result
    surcharge.innerHTML += `$${ageCharges.toFixed(2)}`;
    carRental.innerHTML += `$${basicCharge.toFixed(2)}`;
    optionsPrice.innerHTML += `$${(optionCharges).toFixed(2)}`;
    totalDue.innerHTML += `$${totalDueNum.toFixed(2)}`;
}

function resetOutput() {
    document.getElementById("carRental").innerHTML = "Car rental: ";
    document.getElementById("options").innerHTML = "Options: ";
    document.getElementById("surcharge").innerHTML = "Surcharge: ";
    document.getElementById("totalDue").innerHTML = "Total Due: ";
}

function calcTotalOptions(numDays) {
    const options = document.querySelectorAll(".options");
    let optionCharges = 0;
    // careful with this though
    // if the html order changes, you gets surprise behavior
    if (options[0].checked) {
        optionCharges += 3.95;
    }
    if (options[1].checked) {
        optionCharges += 2.95;
    }
    if (options[2].checked) {
        optionCharges += 2.95;
    }
    return optionCharges * numDays;
}

function calcSurcharge(basicCharge) {
    let ageCharges = 0;
    // surcharge - under 25
    if (document.querySelector("input[value='yes']:checked")) {
        ageCharges = 0.3 * basicCharge;
    }
    return ageCharges;
}