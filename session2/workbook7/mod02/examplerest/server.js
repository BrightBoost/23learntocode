const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { dirname } = require("path");

let app = express();

app.get("/api/movies", function(req, res) {
    console.log("Got a get request for all movies");
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));
    res.end(JSON.stringify(data));
});

app.get("/api/movies/:id", function(req, res) {
    let id = req.params.id;
    console.log("Got a get request for movie with id " + id);
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));
    let match = data.find(movie => movie.id == id);
    if(match != undefined) {
        res.end(JSON.stringify(match));
    } else {
        res.send("No match found.");
    }
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let server = app.listen(8081, () => {
    console.log("App listening to port " + server.address().port);
});