window.addEventListener("load", () =>{
    document.getElementById("productSave").addEventListener("click", onClickSaveProduct);
    document.getElementById("deleteProduct").addEventListener("click", onClickNotInterestedProduct);

    populateInterestingProductDiv();
});

function onClickSaveProduct() {
    localStorage.setItem("lastProduct", document.getElementById("product").value);
}

function populateInterestingProductDiv() {
    if(localStorage.getItem("lastProduct")) {
        document.getElementById("interestingProduct").innerHTML = localStorage.getItem("lastProduct");
    } else {
        document.getElementById("interestingProduct").innerHTML = "";
    }
}

function onClickNotInterestedProduct() {
    if(localStorage.getItem("lastProduct")) {
        localStorage.removeItem("lastProduct");
    }
    populateInterestingProductDiv();
}