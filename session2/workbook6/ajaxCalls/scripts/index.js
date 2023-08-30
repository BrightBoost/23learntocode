$(() => {

    //GET
    let postId = 3;
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + postId,
        type: "GET"
    })
    .done(result => {
        console.log(result);
    })
    .fail((jqXHR, textStatus, error) => {
        console.log(jqXHR + " - " + textStatus + " - " + error);
    });

    //GET with .get
    $.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    .done(result => {
        console.log(".get: - " + result.body);
    })
    .fail((jqXHR, textStatus, error) => {
        console.log(jqXHR + " - " + textStatus + " - " + error);
    });

    //GET
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/",
        type: "POST",
        data: {
            userId: 23,
            body: "this is a post body for a post request",
            title: "poor choice"
        }
    })
    .done(result => {
        console.log(result);
    })
    .fail((jqXHR, textStatus, error) => {
        console.log(jqXHR + " - " + textStatus + " - " + error);
    });

    
});