"use strict";

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = () => {
    const menuSelect = document.getElementById("menu");
    menuSelect.onchange = onMenuSelectChange;
}

function onMenuSelectChange() {
    const valueForMenuSelect = document.getElementById("menu").value;
    let meals = document.getElementById("meal");
    meals.options.length = 0;
    
    console.log(valueForMenuSelect);
    if (valueForMenuSelect == "") {
        meals.style.display = "none";
    } else {
        meals.size = menu[valueForMenuSelect].length;
        meals.style.display = "block";
        for (let item of menu[valueForMenuSelect]) {
            let thisOption = new Option(item, item);
            meals.appendChild(thisOption);
        }
    }



}

