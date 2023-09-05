const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/movies", function (req, res) {
    console.log("Got a get request for all movies");
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));
    res.end(JSON.stringify(data));
});

app.get("/api/movies/:id", function (req, res) {
    let id = req.params.id;
    console.log("Got a get request for movie with id " + id);
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));
    let match = data.find(movie => movie.id == id);
    if (match != undefined) {
        res.end(JSON.stringify(match));
    } else {
        res.send("No match found.");
    }
});

app.post("/api/movies", urlencodedParser, function (req, res) {
    console.log("Post received for adding a movie" + JSON.stringify(req.body));
    let dataIds = JSON.parse(fs.readFileSync(__dirname + "/data/next-id.json", "utf-8"));
    let movie = {
        id: dataIds.movieId++,
        title: req.body.title,
        yearreleased: req.body.yearreleased
    };
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));

    data.push(movie);
    fs.writeFileSync(__dirname + "/data/movies.json", JSON.stringify(data));
    fs.writeFileSync(__dirname + "/data/next-id.json", JSON.stringify(dataIds));

    res.status(201).end(JSON.stringify(movie));
});

app.delete("/api/movies/:id", function(req, res) {
    let id = req.params.id;
    console.log(`Deleting ${id}`);
    let data = JSON.parse(fs.readFileSync(__dirname + "/data/movies.json", "utf-8"));
    let movieDeleteIndex = data.findIndex(movie => movie.id == id);
    if(movieDeleteIndex != -1) {
        data.splice(movieDeleteIndex, 1);
        fs.writeFileSync(__dirname + "/data/movies.json", JSON.stringify(data));
        res.send("Movie deleted.")
    } else {
        res.status(404).send("Movie not found.");
    }
});


let server = app.listen(8081, () => {
    console.log("App listening to port " + server.address().port);
});