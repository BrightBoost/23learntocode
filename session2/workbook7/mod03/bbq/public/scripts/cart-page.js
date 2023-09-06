"use strict";
function drawCartPage() {
// erase previous contents
$("#page-container").html("");
// define page contents
let pageShell = $(`
<div class="row">
<div class="col-md-8 mx-auto text-center">
<h3>Cart Page is Under Construction</h3>
</div>
</div>
 `);
// add page contents to <main>
$("#page-container").append(pageShell);
 // set the page title
 $("title").html("Cart");
};