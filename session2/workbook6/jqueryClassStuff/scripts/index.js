$(document).ready(function () {
    $("#cone").on("click", toggleExtras);
    $("#cup").on("click", toggleExtras);
    // connect other event
});

function toggleExtras() {
    $("#extras").toggleClass("unavailable");

}