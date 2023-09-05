"use strict";

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

    // assign event handler to form submit for post
    $("#addProduct").on("submit", onAddProduct);
});


// event handler to change category select - populate table 
function onCategorySelectChange() {
    let selectedCategoryId = $("#categorySelect").val();
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

function onAddProduct() {
    $.post("http://localhost:8081/api/products",
        $("#addProduct").serialize(),
        function (result, textStatus, jqXHR) {
            onCategorySelectChange();
            console.log(textStatus);
            console.log(jqXHR);
        }
    );
    return false;
}

// other way of post
// function onAddProduct() {

//     $.post({
//         url: "http://localhost:8081/api/products",
//         data: {
//             "productName": $("#productName").val(),
//         }
//     })
//         .done(function (data) {
//             // confirm a new student added
//             console.log(data);
//             return false; // don't refresh the form
//         })
//         .fail(function (xhr, status, error) {
//             // error message when post doesn't work
//             console.log(data);

//             return false; // don't refresh the form
//         });
// }