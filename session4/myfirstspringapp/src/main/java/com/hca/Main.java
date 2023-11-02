package com.hca;

import com.hca.model.Student;
import com.hca.service.RegistrationService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) throws Exception {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("/beans.xml");
        RegistrationService registrationService = ctx.getBean(RegistrationService.class);

        if(registrationService != null) {
            Long studentId = registrationService.registerStudent(new Student("Bobby", "van Putten", "Math"));

            System.out.println("New student with id:" + studentId);

            System.out.println("Other student found: " + registrationService.getStudent(54L));

        }
    }
}
