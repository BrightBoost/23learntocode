window.addEventListener("load", () => {
    const form = document.querySelector("#theForm");
    form.addEventListener("submit", onSubmitForm);
});

function onSubmitForm(e) {
    e.preventDefault();
    let nameValue = document.getElementById("name").value;
    try {
        if (nameValue == "") {
            throw new Error("YOU NEED TO ADD A NAME.");
        } else if (nameValue.length < 3) {
            throw new Error("YOU NEED TO ADD A LONGER NAME.");
        }
        alert("Thank you!");
    } catch (err) {
        alert("Ok ok ok, nice try, can you read it again?");
    }
    alert("Bye");
}