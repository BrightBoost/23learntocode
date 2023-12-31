package com.hca.insurancecompany.config;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DatabaseConnector {
    private BasicDataSource dataSource;

    @Bean
    public BasicDataSource getDataSource() {
        return dataSource;
    }

    @Autowired
    public DatabaseConnector(@Value("${datasource.connectionUrl}") String url,
                             @Value("${datasource.username}") String username,
                             @Value("${datasource.password}") String password) {
        dataSource = new BasicDataSource();
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);

    }
}
