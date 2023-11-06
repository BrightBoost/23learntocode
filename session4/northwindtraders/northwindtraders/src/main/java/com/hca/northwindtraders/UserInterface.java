package com.hca.northwindtraders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class UserInterface {

    SimpleProductDao spd;

    @Autowired
    public UserInterface(SimpleProductDao spd) {
        this.spd = spd;
    }

    public void display() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("What is the name of the product you want to add?");
        String name = scanner.nextLine();
        System.out.println("What is the name of the product you want to add?");
        double price = scanner.nextDouble();
        scanner.nextLine();

        spd.addProduct(new Product(0, name, price));

        System.out.println(spd.getAllProducts());
    }
}
