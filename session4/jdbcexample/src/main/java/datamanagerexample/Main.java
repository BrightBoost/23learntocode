package datamanagerexample;

import org.apache.commons.dbcp2.BasicDataSource;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl("jdbc:mysql://localhost:3306/northwind");
        basicDataSource.setUsername(args[0]);
        basicDataSource.setPassword(args[1]);

        NorthwindDataManager ndm = new NorthwindDataManager(basicDataSource);

        // this should have been in an UI class
        System.out.println("Do you want to see all the products?");
        Scanner scanner = new Scanner(System.in);
        String answer = scanner.nextLine();
        if(answer.equalsIgnoreCase("yes")) {
            System.out.println("Great!");
        } else {
            System.out.println("Well, here are they anyways!");
        }

        for(Product p : ndm.getAllProducts()) {
            System.out.println(p);
        }



    }
}
