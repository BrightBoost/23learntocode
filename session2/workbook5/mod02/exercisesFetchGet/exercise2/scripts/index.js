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
        let headers = ["id", "name", "username", "email", "phone", "website"];
        let headerRow = usersTableBody.insertRow(-1);
        for(let header of headers) {
            headerRow.insertCell(-1).innerHTML = header;
        }
        for(let user of users) {
            let row = usersTableBody.insertRow(-1);
            for(let header of headers) {
                row.insertCell(-1).innerHTML = user[header];
            }
        }
    });
}