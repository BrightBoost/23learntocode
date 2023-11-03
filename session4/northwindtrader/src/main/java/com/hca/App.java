package com.hca;

import com.hca.model.Product;
import com.hca.service.ProductService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.math.BigDecimal;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("/beans.xml");
        ProductService productService = applicationContext.getBean(ProductService.class);
        if (productService == null) {
            System.out.println("No service available");
            System.exit(1);
        }

        boolean run = true;
        while(run) {
            System.out.println("Add(1) or get all products (2)");
            Scanner scanner = new Scanner(System.in);

            int choice = scanner.nextInt();
            scanner.nextLine();


            switch (choice) {
                case 1:
                    addProduct(scanner, productService);
                    break;
                case 2:
                    showAll(productService);
                    break;
                default:
                    System.out.println("Sorry don't know that choice");
                    run = false;
                    break;
            }
        }

    }

    public static void addProduct(Scanner scanner, ProductService productService) {
        // get input
        System.out.println("Enter name of product:");
        String name = scanner.nextLine();
        System.out.println("Enter category of product:");
        String cat = scanner.nextLine();
        System.out.println("Enter price of product:");
        BigDecimal price = scanner.nextBigDecimal();
        scanner.nextLine();

        productService.addProduct(new Product(name, cat, price));

    }

    public static void showAll(ProductService productService) {
        for(Product p : productService.getAll()) {
            System.out.println(p);
        }
    }
}

