package com.hca.northwindtraders;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SimpleProductDao implements ProductDao {
    List<Product> products;
    long idCounter = 4;

    public SimpleProductDao() {
        this.products = new ArrayList<>();
        products.add(new Product(1, "Coffee", 5));
        products.add(new Product(2, "Coffee", 5));
        products.add(new Product(3, "Coffee", 5));
    }

    public long addProduct(Product product) {
        long id = idCounter++;
        product.setId(id);
        products.add(product);
        return id;
    }

    public List<Product> getAllProducts() {
        return products;
    }
}
