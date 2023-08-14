window.onload = () => {
    const msgDiv = document.getElementById("messageDiv");
    let child = document.createTextNode("blablabla");
    msgDiv.appendChild(child);
    msgDiv.insertBefore(document.createTextNode("new"), child);
}