$(document).ready(() => {
    let newElement = $("<p>", {
        id: "test3",
        text: "test 3"
    });

    $("#test1").before(newElement); // grab the element on the page, before that, add this
    $("#test2").after(newElement); // grab the element on the page, after that, add this
});