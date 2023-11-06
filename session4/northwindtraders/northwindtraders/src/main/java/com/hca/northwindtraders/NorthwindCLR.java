package com.hca.northwindtraders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class NorthwindCLR implements CommandLineRunner {

    UserInterface userInterface;
    @Autowired
    public NorthwindCLR(UserInterface userInterface) {
        this.userInterface = userInterface;
    }

    @Override
    public void run(String... args) throws Exception {
        userInterface.display();
    }


}
