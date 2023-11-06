package com.hca.demo.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExampleConfig {
    public ExampleConfig(@Value("${blabla}") String message) {
        System.out.println(message);
    }
}
