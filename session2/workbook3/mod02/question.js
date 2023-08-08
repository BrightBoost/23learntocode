function getMealCost(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {
        if(orders[i].item == "Guacamole") {
            sum += orders[i].price;
        } else {
            sum += orders[i].price * 0.9;

        }
    }
    return sum;
}
let myOrder = [
    { item: "Chicken Tacos", price: 8.95 },
    { item: "Guacamole", price: 2.85 },
    { item: "Sweet Tea", price: 2.75 }
];