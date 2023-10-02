let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

let app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    next();
});
// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: true })


////////////////////////////////////////////////
// API ENDPOINTS

// GET puppies
app.get("/api/puppies", function (req, res) {
    console.log("Got a GET request for puppies");

    let data = fs.readFileSync(__dirname + "/data/puppies.json", "utf8");

    // Log returned data for debugging purposes
    data = JSON.parse(data);
    console.log("Returning...");
    console.log(data);

    res.send(data);
});

// GET puppy by name
app.get("/api/puppies/:name", function (req, res) {
    let name = req.params["name"];
    console.log("Got a GET request for puppy by name");

    let data = fs.readFileSync(__dirname + "/data/puppies.json", "utf8");

    // Log returned data for debugging purposes
    data = JSON.parse(data);
    let matchingPuppy = data.find(puppy => puppy.name == name);
    if(!matchingPuppy) {
        res.status(404).send();
        return;
    }
    console.log("Returning...");
    console.log(matchingPuppy);

    res.send(matchingPuppy);
});

// POST A NEW PUPPY
app.post("/api/puppies", urlencodedParser, function (req, res) {
    console.log("Got a POST request for to add a puppy");
    console.log("BODY -------->" + JSON.stringify(req.body));

    let data = fs.readFileSync(__dirname + "/data/puppies.json", "utf8");
    data = JSON.parse(data);

    // Create a review by placing the posted data (reviewer and comment) 
    // into an object along with the current date
    let item = {
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        color: req.body.color,
        favoriteToy: req.body.favoriteToy
    };

    // Place the new review in the list and re-save the file
    data.push(item);
    fs.writeFileSync(__dirname + "/data/puppies.json", JSON.stringify(data));

    // Log review added for debugging purposes
    console.log("New puppy: ");
    console.log(item);

    res.status(201).send(item);
});


let server = app.listen(8081, function () {
    let port = server.address().port
    console.log("App listening at port %s", port)
})