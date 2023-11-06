package com.hca.recap;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Example standardExample() {
        return new Example("blabla");
    }

}
