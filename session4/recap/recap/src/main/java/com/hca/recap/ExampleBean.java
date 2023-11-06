package com.hca.recap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExampleBean {

    ExampleService es;

    @Autowired
    public ExampleBean(ExampleService es) {
        this.es = es;
    }
}
