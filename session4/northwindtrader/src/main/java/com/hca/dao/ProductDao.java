package com.hca.dao;

import com.hca.model.Product;

import java.util.HashMap;

public interface ProductDao {
    int add(Product product);
    HashMap<Integer, Product> getAll();
    Product findById(int id);
}
