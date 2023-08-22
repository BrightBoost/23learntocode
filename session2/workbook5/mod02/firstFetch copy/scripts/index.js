window.addEventListener("load", onLoadwindow);

function onLoadwindow() {
    const userEmailDropdown = document.getElementById("userEmailDropdown");
    fetch("http://jsonplaceholder.typicode.com/users/")
    .then(users => users.json())
    .then(users => {
        for(let user of users) {
            userEmailDropdown.appendChild(new Option(user.email, user.id));
        }
    })

    
    userEmailDropdown.addEventListener("change", getUserDetails);
}

function getUserDetails() {
    let userId = this.value;
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => {
            let u = user.json();
            console.dir(user);
            return u;
        })
        .then(user => {
            console.log(user);
            const showUserName = document.getElementById("showUserName");
            showUserName.innerHTML = "The email is:" + user.username;
        });
}