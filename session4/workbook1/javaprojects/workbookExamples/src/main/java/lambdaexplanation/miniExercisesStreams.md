1. Create an ArrayList of names (Strings) and use a stream to print only those names that contain the letter "e".

2. From an ArrayList of names, use a stream to collect all names that start with the letter "A" into a new list and print it.

3. Create an ArrayList of integers, use a stream to find and print the odd numbers.

4. Create an ArrayList of integers, use a stream to double all the numbers and print them.

5. Use a stream to find the first name in an ArrayList of names that is longer than 5 characters, and print it.

6. Create an ArrayList of birthdates (as LocalDate). Find and print any that was after 2000.

7. Create an ArrayList of names, use a stream to convert all names to uppercase and collect them into a new list. (toList)

8. From an ArrayList of strings, use a stream to remove all elements that are empty strings.

9. Use a stream to count the number of names in an ArrayList that have exactly 5 characters and print the count.

10. Create an ArrayList of integers, use a stream to square each number and then find the values over 100.

11. Bonus: From an ArrayList of names, use a stream to sort the names in reverse alphabetical order and print the result.

12. Create an ArrayList of LocalDates, use a stream to find and print all dates that are in the month of February.

13. Use a stream to concatenate all strings from an ArrayList into one string, separated by commas.

14. Create an ArrayList of names, use a stream to end up with a single string which is the result of concatenating all the names in uppercase, separated by “-”.


For exercises 15-19, here’s a simple version of the Person class you should create:

```java
public class Person {
    private String name;
    private int age;

    // constructor, getters and setters

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

For the ArrayList, you can create it as follows:

```java
ArrayList<Person> people = new ArrayList<>();
people.add(new Person("John", 25));
people.add(new Person("Sara", 30));
// add more people
```

15. Define a Person class with attributes: name (String) and age (int). Create an ArrayList of Person objects.

16. From the Person list, use a stream to find and print all persons who are older than 20 years.

17. Bonus: Use a stream to find the average age of all persons in the list.

18. Create a stream to find and print the names of all persons whose name starts with "S".

19. Bonus: Use a stream to sort the persons by age in descending order and print the sorted list.