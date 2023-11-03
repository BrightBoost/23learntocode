package com.hca.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.Scanner;

@Configuration
public class BasicConfiguration {

    @Primary
    @Bean("maaikesScanner")
    public Scanner getScanner() {
        return new Scanner(System.in);
    }

    @Bean
    public Scanner getAnotherScanner() {
        return new Scanner(System.in);
    }
}
