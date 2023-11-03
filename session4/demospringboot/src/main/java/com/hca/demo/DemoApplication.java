package com.hca.demo;

import com.hca.demo.beansoup.BlackBean;
import com.hca.demo.beansoup.GreenBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Scanner;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(DemoApplication.class, args);
		for(String beanName : applicationContext.getBeanDefinitionNames()) {
			System.out.println(beanName);
		}

		Scanner scanner = (Scanner) applicationContext.getBean("maaikesScanner");
		System.out.println("Choose a bean: black bean (1) or green bean (2):");
		int bean = scanner.nextInt();
		switch(bean) {
			case 1:
				BlackBean bb = applicationContext.getBean(BlackBean.class);
				System.out.println(bb);
				break;
			case 2:
				GreenBean gb = applicationContext.getBean(GreenBean.class);
				System.out.println(gb);
				break;
		}
	}

}
