package com.hca.dao;

import com.hca.model.Product;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashMap;

@Component
public class SimpleProductDao implements ProductDao {

    HashMap<Integer, Product> products;
    int nextId = 5;
    public SimpleProductDao() {
        products = new HashMap<>();
        products.put(1, new Product(1, "Cookies", "food", BigDecimal.valueOf(3)));
        products.put(2, new Product(2, "Tea", "food", BigDecimal.valueOf(2)));
        products.put(3, new Product(3, "Coffee", "food", BigDecimal.valueOf(4)));
        products.put(4, new Product(4, "Avocados", "food", BigDecimal.valueOf(5)));
    }
    @Override
    public int add(Product product) {
        int id = nextId++;
        product.setProductId(id);
        products.put(id, product);
        return id;
    }

    @Override
    public HashMap<Integer, Product> getAll() {
        return products;
    }

    @Override
    public Product findById(int id) {
        return products.values()
                .stream()
                .filter(p -> p.getProductId() == id)
                .findFirst()
                .orElse(null);
    }
}
