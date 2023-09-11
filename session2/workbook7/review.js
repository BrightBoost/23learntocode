// AJAX

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(json => console.log(json.address.geo.lat));

// edit data - PUT
// POST - adding new info

