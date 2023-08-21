window.addEventListener("load", onLoadwindow);

function onLoadwindow() {
    const userId = document.getElementById("userId");
    userId.addEventListener("change", getUser);
}

function getUser() {
    let userId = this.value;
    fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => user.json())
        .then(user => {
            const showUserEmail = document.getElementById("showUserEmail");
            showUserEmail.innerHTML = "The email is:" + user.email;
        });
}