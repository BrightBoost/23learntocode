$(document).ready(() => {
    // get all the products, and populate dropdown
    $.getJSON("http://localhost:8081/api/categories", function (categories) {

        $.each(categories, (index, category) => {
            $("#categorySelect").append($("<option>", {
                value: category.categoryId,
                text: category.name
            }));
        });
        $("#categorySelect").change(onCategorySelectChange);
    });



    // assign event handler to form button for post
});


// create method for post product

// event handler to change category select - populate table 
function onCategorySelectChange() {
    let selectedCategoryId = $(this).val();
    $.getJSON("http://localhost:8081/api/products", function (products) {
        $("#productTableBody").empty();
        $("#productTableHead").empty();
        let tableHeaderObject = {
            productName: "Product name",
            unitPrice: "Price"
        };
        createProductTable(products, selectedCategoryId, tableHeaderObject);
        
    });
}

function createProductTable(products, selectedCategoryId, tableHeaderObject) {
    // create row for table head
    let row = $("<tr>");
    $("#productTableHead").append(row);
    for (let tableHeaderObjectProp in tableHeaderObject) {
        row.append($("<th>", {
            text: tableHeaderObject[tableHeaderObjectProp]
        }));
    }


    $.each(products, (index, product) => {
        if (product.categoryId == selectedCategoryId) {
            let productRow = $("<tr>");
            $("#productTableBody").append(productRow);
            for (let tableHeaderObjectProp in tableHeaderObject) {
                productRow.append($("<td>", {
                    text: product[tableHeaderObjectProp]
                }));
            }
        }

    });
}