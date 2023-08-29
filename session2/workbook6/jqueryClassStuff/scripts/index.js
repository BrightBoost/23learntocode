$(document).ready(function () {
    $("#cone").on("change", toggleExtras);
    $("#cup").on("change", toggleExtras);
    $("#addClass").on("click", testAddClass);
    // connect other event
});
// function onHideExtras() {
//     $("#extras").addClass("unavailable");
// }
// function onShowExtras() {
//     $("#extras").removeClass("unavailable");
// }
function toggleExtras() {
    $("#extras").toggleClass("unavailable");

}

function testAddClass() {
    $("#addClass").addClass('red');
}