$(function () {
    $("#estimatePrice").on("click", onEstimateBtnClicked);
});
function onEstimateBtnClicked() {
    let price = Number($("#weight").val()) * 0.55;
    if ($("#tracking").prop("checked")) {
        price += 1.75;
    } else if(!$("#tracking").prop("checked")){
        alert("not checked");
    }
    if ($("#returnReceipt").prop("checked")) {
        price += 1.25;
    }
    $("#messageDiv").text("Estimate: $" + price.toFixed(2));
}