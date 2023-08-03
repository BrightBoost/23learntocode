window.onload = function() {
    const reverseBtn = document.getElementById("reverseBtn");
    reverseBtn.onclick = onclickReverseBtn;
}

function onclickReverseBtn() {
    const reversedText = document.getElementById("reversedText");
    let text = document.getElementById("inputBox").value;

    reversedText.innerHTML = reverse(text);
}

function reverse(text) {
    let newText = "";
    for(let i = 1; i <= text.length; i++) {
        newText += text[text.length - i];
    }

    return newText;
}