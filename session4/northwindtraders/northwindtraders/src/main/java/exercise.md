## Stag Insurance Account Management System - Console Version

### Overview
Create a console-based Java application using Spring Boot that allows employees of "Stag Insurance" to manage business accounts and associated insurance policies.

### Objectives
- Understand how to set up a basic Spring Boot application.
- Implement JDBC to interact with a database directly.
- Repeat basic Java.
- Use `CommandLineRunner` to handle input and simulate a user interface via the console.

### Steps for the Project

#### Step 1: Project Setup
- Set up a new Spring Boot application using Spring Initializr.
- You don't need any dependencies here (you'll have to use the correct ones).

#### Step 2: Define the Domain Model
- Define a simple Java class `Account` with fields like `businessName`, `address`, `mainContact`, `phone`, `email`.
- Define another Java class `InsurancePolicy` with fields like `policyNumber`, `insuredAmount`, `deductible`. 
- (These classes won't be entities managed by an ORM (like JPA), they are just simple POJOs (Plain Old Java Objects).)

#### Step 3: Configure the Data Source and implement JDBC Operations
- Configure your `application.properties` file to define the database settings.
- Set up the `DataSource` bean like we did in the previous exercise.
- Create a `DatabaseConnector` class that handles the creation of database connections using `DataSource`.
- Implement CRUD (Create, Read, Update, Delete) operations in a class, for example, `AccountService`, which will directly use `DatabaseConnector` to perform SQL operations.

#### Step 4: Use CommandLineRunner
- Implement `CommandLineRunner` in your main class or create a separate `@Component` class that implements it.
- This runner will start automatically when the application starts and will handle the console input/output.
- Within the `run` method, provide a simple interactive menu for users to select operations like adding a new account, removing an account, etc.
- Bonus: If you like, you can create a separate class to structure this (and add it as a bean!)

#### Step 5: Application Logic
- Write the logic to prompt the user for the necessary information on the console. Do this either in the run method of the CommandLineRunner implementation or the separate class.
- Perform the operations by calling methods on the `AccountService` with the information provided by the user.
- For example, to add a new account, prompt for the business name, address, main contact, etc., and then call the appropriate method to save this information to the database.

#### Step 6: Handling Exceptions
- Handle any SQL exceptions that may occur during database operations by try-catch or try-with-resources and catch blocks and provide meaningful messages to the user.


#### Step 7: Bonus (Optional)
- As an extra challenge, allow for the input and management of insurance policies associated with accounts.
- Integrate basic input validation in the console, such as checking for empty inputs or validating email formats.


