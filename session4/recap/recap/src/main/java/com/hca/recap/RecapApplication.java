package com.hca.recap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RecapApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecapApplication.class, args);
		// create all the beans, pretending to be the chief gnome (aka spring container)

		// step 1 component scan, starting from the directory I'm in now - looking for beans
		// I'm in com.hca.recap - scanning for beans
		// I'm in RecapApplication, it's annoted with @SpringBootApplication, It's a bean
		// AppConfig - hey that's a configuration class, let's check the content
		// it has one method standardExample that's annotated with bean
		// Example? Not a bean
		// ExampleBean? - This is a bean! - Oh it relies on ExampleService - not a problem
		// ExampleService - This is a bean!



		// RecapApplication - AppConfig - Example - ExampleBean - ExampleService

		// Step 2: Create the instances and store them in the appcontext.....

		RecapApplication recapApplication = new RecapApplication();
		AppConfig appConfig = new AppConfig();
		Example standardExample = appConfig.standardExample();
		ExampleService exampleService = new ExampleService();
		ExampleBean exampleBean = new ExampleBean(exampleService);


	}

}
