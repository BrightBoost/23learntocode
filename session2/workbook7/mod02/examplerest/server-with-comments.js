// Import the Express library to create a web server
const express = require("express");

// Import the body-parser library to parse incoming request bodies
const bodyParser = require("body-parser");

// Import the fs (File System) library to read and write files
const fs = require("fs");

// Initialize an Express application
let app = express();

// Initialize body-parser with URL encoding to handle form submissions
let urlencodedParser = bodyParser.urlencoded({ extended: true });

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use body-parser to parse JSON payloads
app.use(bodyParser.json());

// Use body-parser to handle URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route to fetch all movies
app.get("/api/movies", function (req, res) {
    // Log the incoming GET request
    console.log("Got a get request for all movies");

    // Read and parse the movies.json file
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    // Send the parsed data as a JSON response
    res.end(JSON.stringify(data));
});

// Define a GET route to fetch a movie by its ID
app.get("/api/movies/:id", function (req, res) {
    // Extract the ID from the request parameters
    let id = req.params.id;

    // Log the incoming GET request with the ID
    console.log("Got a get request for movie with id " + id);

    // Read and parse the movies.json file
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    // Find the movie with the matching ID
    let match = data.find(movie => movie.id == id);

    // Send the matching movie as a JSON response, or a "No match found" message
    if (match != undefined) {
        res.end(JSON.stringify(match));
    } else {
        res.send("No match found.");
    }
});

// Define a POST route to add a new movie
app.post("/api/movies", urlencodedParser, function (req, res) {
    // Log the incoming POST request and its body
    console.log("Post received for adding a movie" + JSON.stringify(req.body));

    // Read and parse the next-id.json file to get the next available ID
    let dataIds = JSON.parse(fs.readFileSync(__dirname + "/data/next-id.json", "utf-8"));

    // Create a new movie object
    let movie = {
        id: dataIds.movieId++,
        title: req.body.title,
        yearreleased: req.body.yearreleased
    };

    // Read and parse the movies.json file
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    // Add the new movie to the data array
    data.push(movie);

    // Write the updated data back to movies.json
    fs.writeFileSync(__dirname + "/data/movies.json", JSON.stringify(data));

    // Update the next available ID in next-id.json
    fs.writeFileSync(__dirname + "/data/next-id.json", JSON.stringify(dataIds));

    // Send a 201 Created status and the new movie as a JSON response
    res.status(201).end(JSON.stringify(movie));
});

// Define a PUT route to update an existing movie by its ID
app.put("/api/movies/:id", urlencodedParser, function(req, res) {
    // Extract the ID from the request parameters
    let id = req.params.id;

    // Log the incoming PUT request with the ID
    console.log(`Updating movie with ${id}`);

    // Read and parse the movies.json file
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    // Find the index of the movie with the matching ID
    let movieUpdateIndex = data.findIndex(movie => movie.id == id);

    // Update the movie if it exists
    if(movieUpdateIndex != -1) {
        if(req.body.title != undefined) {
            data[movieUpdateIndex].title = req.body.title;
        }
        if(req.body.yearreleased != undefined) {
            data[movieUpdateIndex].yearreleased = req.body.yearreleased;
        }

        // Write the updated data back to movies.json
        fs.writeFileSync(__dirname + "/data/movies.json", JSON.stringify(data));

        // Send a success message
        res.send("Movie updated.")
    } else {
        // Send a 404 Not Found status if the movie doesn't exist
        res.status(404).send("Movie not found.");
    }
});

// Define a DELETE route to remove a movie by its ID
app.delete("/api/movies/:id", function(req, res) {
    // Extract the ID from the request parameters
    let id = req.params.id;

    // Log the incoming DELETE request with the ID
    console.log(`Deleting ${id}`);

    // Read and parse the movies.json file
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    // Find the index of the movie with the matching ID
    let movieDeleteIndex = data.findIndex(movie => movie.id == id);

    // Delete the movie if it exists
    if(movieDeleteIndex != -1) {
        data.splice(movieDeleteIndex, 1);

        // Write the updated data back to movies.json
        fs.writeFileSync(__dirname + "/data/movies.json", JSON.stringify(data));

        // Send a success message
        res.send("Movie deleted.")
    } else {
        // Send a 404 Not Found status if the movie doesn't exist
        res.status(404).send("Movie not found.");
    }
});

// Start the Express server on port 8081
let server = app.listen(8081, () => {
    // Log the port number when the server starts
    console.log("App listening to port " + server.address().port);
});
