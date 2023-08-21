window.addEventListener("load", onLoadwindow);

function onLoadwindow() {
    const userId = document.getElementById("userId");
    userId.addEventListener("change", getUser);
}

function getUser() {
    let userId = this.value;
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => {
            let u = user.json();
            console.log(u);
            return u;
        })
        .then(user => {
            console.log(user);
            const showUserEmail = document.getElementById("showUserEmail");
            showUserEmail.innerHTML = "The email is:" + user.email;
        });
}