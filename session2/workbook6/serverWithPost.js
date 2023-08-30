let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

let app = express(); // creates the server

// Enables support for traditional HTML <form> submissions, in which 
// data is sent encoded within the URL, like query parameters
let urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(urlencodedParser);
app.use(bodyParser.json());
// REST API endpoints ------------------------------------------------

// Listen for GET requests to get all categories
app.get("/api/categories", function (req, res) {
    console.log("Got a GET request for all categories");

    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "categories.json", "utf8");
    data = JSON.parse(data);

    // log output for debugging 
    console.log("Returning: ");
    console.log(data);

    // return JSON
    res.end(JSON.stringify(data));
});

// Listen for GET requests to get all products
app.get("/api/products", function (req, res) {
    console.log("Got a GET request for all products");

    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "products.json", "utf8");
    data = JSON.parse(data);

    // log output for debugging 
    console.log("Returning: ");
    console.log(data);

    // return JSON
    res.end(JSON.stringify(data));
});

// Listen for GET requests to get a specific product
app.get("/api/products/:id", function (req, res) {
    // get product id from URL ->  ex: /api/products/13
    let id = req.params.id;
    console.log("Got a GET request for product " + id);

    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "products.json", "utf8");

    // find specific product by id
    data = JSON.parse(data);
    let matching = data.find(p => p.productId == id);

    // log output for debugging 
    console.log("Returning: ");
    console.log(matching);

    // return JSON
    res.end(JSON.stringify(matching));
})

// Listen for GET requests to get all products within a given category
app.get("/api/products/bycategory/:id", function (req, res) {
    // get category id from URL -> ex: /api/products/bycategory/2
    let id = req.params.id;
    console.log("Got a GET request for products in category " + id);

    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "products.json", "utf8");
    data = JSON.parse(data);

    // find products that match category
    let matching = data.filter(p => p.categoryId == id);

    // log output for debugging 
    console.log("Returning: ");
    console.log(matching);

    // return JSON
    res.end(JSON.stringify(matching));
});

// Listen for GET requests to get all products for a supplier
app.get("/api/products/bysupplier/:name", function (req, res) {
    let name = req.params.name;
    console.log("Got a GET request for products in supplier " + name);

    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "products.json", "utf8");
    data = JSON.parse(data);

    // find products that match category
    let matching = data.filter(p => p.supplier == name);

    // log output for debugging 
    console.log("Returning: ");
    console.log(matching);

    // return JSON
    res.end(JSON.stringify(matching));
});

app.post("/api/products", urlencodedParser, function (req, res) {
    console.log("Got a POST request for a new product");
    console.log(JSON.stringify(req.body));
    // read data
    let data = fs.readFileSync(__dirname + "/data/" + "products.json", "utf8");
    data = JSON.parse(data);
    let product = {
        productId: data.length + 1,
        productName: req.body.productName,
        unitPrice: req.body.unitPrice,
        unitsInStock: req.body.unitsInStock,
        categoryId: req.body.categoryId,
        supplier: req.body.supplier,
        discontinued: req.body.discontinued
    };
    data.push(product);
    fs.writeFileSync(__dirname + "/data/" + "products.json", JSON.stringify(data));


    // return JSON
    res.end(JSON.stringify(product));
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let server = app.listen(8081, function () {
    let port = server.address().port
    console.log("App listening at port %s", port)
});
