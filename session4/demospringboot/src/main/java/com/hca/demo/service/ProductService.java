package com.hca.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Scanner;

@Service
public class ProductService {
    private Scanner scanner;

    @Autowired
    public ProductService(Scanner scanner) {
        this.scanner = scanner;
    }
}
