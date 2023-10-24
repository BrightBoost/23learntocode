**Simple Banking System Project**

**Objective:** Develop a console-based banking application with features like account management, transaction handling, and persistent data storage using file operations.

**Requirements:**

**Step 1: Project Setup**
- Set up your development environment.
- Create a new Java project in your preferred IDE (e.g., Eclipse, IntelliJ IDEA).
- Structure your project by creating packages for organizing your classes (e.g., `models`, `services`, `data`, `utils`).

**Step 2: Define the Model Classes**
- Create an `Account` class with attributes such as `accountNumber`, `accountHolderName`, `balance`, `accountType`, and `transactionHistory` (a list of transactions).
- Implement subclasses like `SavingsAccount` and `CurrentAccount` with specific features overridden or extended as necessary (e.g., withdrawal limits).
- Create a `Transaction` class with attributes like `transactionDate`, `type` (e.g., DEPOSIT, WITHDRAWAL), and `amount`.

**Step 3: Implement Data Persistence**
- Choose a format for storing your data in files (e.g., CSV, JSON, or plain text).
- Create a `FileManager` or `DataAccess` class in the `data` package responsible for all file operations, such as reading from and writing to files.
- Implement methods for saving accounts, retrieving accounts, updating account data, and logging transactions.

**Step 4: Create Banking Services**
- In the `services` package, create a `BankService` class.
- Implement methods to handle banking operations such as `createAccount()`, `closeAccount()`, `deposit()`, `withdraw()`, `transfer()`, and `printTransactionHistory()`.
- Ensure proper handling of exceptions and edge cases, like insufficient balance checks.

**Step 5: Develop the User Interface**
- In your `Main` class or a new `ConsoleUI` class in the `utils` package, implement the user interface.

```
Welcome to the Simple Banking System!
Please select an option:

1. Create a new account
2. Close an existing account
3. Deposit funds
4. Withdraw funds
5. Transfer funds
6. View account balance
7. View transaction history
8. Calculate interest (Bonus Feature)
9. Search transactions by date (Bonus Feature)
10. Search transactions by type (Bonus Feature)
11. Exit

Your choice:
```

- Use the `Scanner` class to receive user input.
- Display a menu with options corresponding to the banking operations.
- Handle user commands and call the appropriate services. Remember to validate user inputs!

**Step 6: Integrate Everything**
- In your `Main` class, integrate all parts of your application.
- Implement the main loop where the program will run, showing the menu, accepting input, and performing the operations.
- Ensure the user can exit the program gracefully.

**Step 7: Test Your Application**
- Perform comprehensive testing of your application. Ensure all functionalities are working as expected.
- Test edge cases: What happens if a user tries to withdraw more money than they have? What if the input format is incorrect?
- Test data persistence: If you restart the application, does it keep the previous data?

**Step 8: Document Your Code**
- Write clear comments explaining the more complex parts of your code.
- If time permits, create a simple README file explaining how your application works and any special features you included.

**Step 9: Bonus Features (Optional)**
- Implement an interest calculation feature for savings accounts.
- Add a feature to search for transactions within a date range, type, etc.
- Allow for different user roles with varying levels of access (e.g., regular user versus bank admin).


