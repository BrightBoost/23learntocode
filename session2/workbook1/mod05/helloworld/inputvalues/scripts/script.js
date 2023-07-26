const ageField = document.getElementById("ageField");
ageField.value="blabla";

function showMessage() {
    const nameField = document.getElementById("nameField");
    const ageField = document.getElementById("ageField");
    let name = nameField.value;
    let age = ageField.value; // age is a string here
    let message =
        `Hi ${name}! I hear you are ${age} years old!`;
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = message;
}

