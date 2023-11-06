package com.hca.northwindtraders;

import java.util.List;

public interface ProductDao {
    List<Product> getAllProducts();
    long addProduct(Product product);
}
