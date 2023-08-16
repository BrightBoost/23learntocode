let users = [];
// onload
window.onload = () => {
    // fetch data
    loadUsersData();
    // assign onclick for the button
    document.getElementById("showData").onclick = onClickShowData;
};



// function load data
function loadUsersData() {
    fetch("http://127.0.0.1:5500/session2/workbook4/mod06/stepByStepJson/data/users.json")
        .then(result => result.json())
        .then(data => users = data);
}

// function show data
function onClickShowData() {
    const displayData = document.getElementById("displayData");
    // loop over users
    for(let user of users) {
        // create element with data from users array
        let p = document.createElement("p");
        p.innerHTML = user["username"];
        // append it to div for displaying
        displayData.appendChild(p);
    }
}