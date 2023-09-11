"use strict";
$(function () {
    // Connect the click of each navbar hyperlink to an event
    // handler that calls the function that creates the HTML
    $("#homeLink").on("click", function () {
        drawHomePage();
    });
    $("#orderPageLink").on("click", function () {
        drawOrderPage();
    });
    $("#viewCartPageLink").on("click", function () {
        drawCartPage();
    });
    // Draw the landing view when the page loads
    drawHomePage();
});
function drawHomePage() {
    // erase previous contents
    $("#page-container").html("");
    // define page contents
    let pageShell = $(`
<div class="row">
<div class="col-md-8 mx-auto text-center">
<h3>Home Page is Under Construction</h3>
</div>
</div>
`);
    // add page contents to <main>
    $("#page-container").append(pageShell);
    // set the page title
    $("title").html("My BBQ Restaurant");
};