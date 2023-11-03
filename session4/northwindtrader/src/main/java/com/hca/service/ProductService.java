package com.hca.service;

import com.hca.dao.ProductDao;
import com.hca.dao.SimpleProductDao;
import com.hca.model.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductService {
    private ProductDao productDao;

    public ProductService(ProductDao productDao) {
        this.productDao = productDao;
    }

    // add a product
    public int addProduct(Product product) {
        // i could do checks here
        return this.productDao.add(product);
    }

    // get all products
    public List<Product> getAll() {
        return this.productDao.getAll().values().stream().collect(Collectors.toList());
    }
}
