package lambdaexplanation;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class SolutionsMiniExercises {

    public static void main(String[] args) {
//    1. Create a List of names (Strings) and use a stream to print only those names that contain the letter "e".
        System.out.println("Exercise 1:");
        List<String> names = Arrays.asList("James", "Joe", "Johnoy", "Gabriela", "Krista", "Terria", "Mandana", "Alex");
        names.stream().filter(name -> name.toLowerCase().contains("e")).forEach(System.out::println);
        System.out.println("****************************");

//    2. From an ArrayList of names, use a stream to collect all names that start with the letter "A" into a new list and print it.
        System.out.println("Exercise 2:");
        List<String> filteredNames = names.stream().filter(name -> name.toLowerCase().startsWith("a")).collect(Collectors.toList());
        System.out.println(filteredNames);
        System.out.println("****************************");

//    3. Create an ArrayList of integers, use a stream to find and print the odd numbers.
        System.out.println("Exercise 3:");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
        numbers.stream().filter(i -> i % 2 != 0).forEach(System.out::println);
        System.out.println("****************************");

//    4. Create an ArrayList of integers, use a stream to double all the numbers and print them.
        System.out.println("Exercise 4:");
        numbers.stream().map(nr -> nr * 2).forEach(System.out::println);
        System.out.println("****************************");

//    5. Use a stream to find the first name in an ArrayList of names that is longer than 5 characters, and print it.
        System.out.println("Exercise 5:");
        Optional<String> longName = names.stream().filter(name -> name.length() > 5).findFirst();
        System.out.println(longName.orElse("No match"));
        System.out.println("****************************");

//    6. Create an ArrayList of birthdates (as LocalDate). Find and print any that was after 2000.
        System.out.println("Exercise 6:");
        List<LocalDate> birthdates = Arrays.asList(LocalDate.of(1989,4, 5), LocalDate.of(1987, 12, 21), LocalDate.of(2019, 2, 15));
        birthdates.stream().filter(b -> b.getYear() >= 2000).forEach(System.out::println);
        System.out.println("****************************");

//    7. Create an ArrayList of names, use a stream to convert all names to uppercase and collect them into a new list. (toList)
        System.out.println("Exercise 7:");
        List<String> uppercaseNames = names.stream().map(name -> name.toUpperCase()).collect(Collectors.toList());
        System.out.println(uppercaseNames);
        System.out.println("****************************");

//    8. From an ArrayList of strings, use a stream to remove all elements that are empty strings.
        System.out.println("Exercise 8:");
        List<String> updatedNames = names.stream().filter(s -> s.length() > 0).collect(Collectors.toList());
        System.out.println(updatedNames);
        System.out.println("****************************");

//    9. Use a stream to count the number of names in an ArrayList that have exactly 5 characters and print the count.
        System.out.println("Exercise 9:");
        ArrayList<String> has5 = names.stream().filter(n -> n.length() == 5).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(has5);

        long nrOfNamesWith5Letters = names.stream().filter(n -> n.length() == 5).count();
        System.out.println(nrOfNamesWith5Letters);
        System.out.println("****************************");

//    10. Create an ArrayList of integers, use a stream to square each number and then find the values over 100.
        System.out.println("Exercise 10:");

        numbers.stream().map(i -> Math.pow(i, 2)).filter(i -> i > 100).forEach(System.out::println);
        System.out.println("****************************");

//    11. Bonus: From an ArrayList of names, use a stream to sort the names in reverse alphabetical order and print the result.
//
//    12. Create an ArrayList of LocalDates, use a stream to find and print all dates that are in the month of February.
//
//    13. Use a stream to concatenate all strings from an ArrayList into one string, separated by commas.
//
//    14. Create an ArrayList of names, use a stream to end up with a single string which is the result of concatenating all the names in uppercase, separated by “-”.
//
//    15. Define a Person class with attributes: name (String) and age (int). Create an ArrayList of Person objects.
//
//    16. From the Person list, use a stream to find and print all persons who are older than 20 years.
//
//    17. Bonus: Use a stream to find the average age of all persons in the list.
//
//    18. Create a stream to find and print the names of all persons whose name starts with "S".
//
//    19. Bonus: Use a stream to sort the persons by age in descending order and print the sorted list.
    }
}