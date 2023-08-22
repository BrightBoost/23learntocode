// onload
window.addEventListener("load", () => {
    // get the button and add the event
    document.getElementById("getTodoBtn").addEventListener("click", populateTodoTable);
})

// click
function populateTodoTable() {
    // call the api with the id
    let todoId = document.getElementById("todoId").value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response => response.json())  // convert to json format
    .then(todo => {
        const todoTableBody = document.getElementById("todoTableBody");
        todoTableBody.innerHTML = "";
        for(let property in todo) {
            let row = todoTableBody.insertRow(-1);
            row.insertCell(-1).innerHTML = property;
            row.insertCell(-1).innerHTML = todo[property];

        }
    });
}