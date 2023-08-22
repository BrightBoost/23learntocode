// onload
window.addEventListener("load", () => {
    populateUsersTable();
})

// click
function populateUsersTable() {
    // call the api
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())  // convert to json format
        .then(users => {
            const usersTableBody = document.getElementById("usersTableBody");
            usersTableBody.innerHTML = "";
            // let headers = [{ id: "Id" }, { name: "Name" }, { username: "Username" }, { email: "Email" }, { phone: "Phone number" }, { website: "Website" }];
            let headers = {
                id: "Id",
                name: "Name",
                phone: "Phone"
            }
            let headerRow = usersTableBody.insertRow(-1);
            for (let headerProp in headers) {
                headerRow.insertCell(-1).innerHTML = headers[headerProp];

            }
            for (let user of users) {
                let row = usersTableBody.insertRow(-1);
                for (let headerProp in headers) {
                    row.insertCell(-1).innerHTML = user[headerProp];
                }
            }
        });
}