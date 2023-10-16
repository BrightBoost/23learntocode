package funwithexceptions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class AnotherExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            String[] names = {
                    "Ezra", "Elisha", "Ian",
                    "Siddalee", "Pursalane", "Zephaniah"
            };
            System.out.print("Pick a kid (select #1 - #6): ");
            int index = scanner.nextInt();

            index--; // change number from range 1-6 to range 0-5
            // as long as the user entered a number in the range
            // of 1 to 6, this will work. Otherwise the index
            // will be out of range.
            System.out.println(names[index]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Your number was out of range!");
            e.printStackTrace();
        } catch(InputMismatchException e) {
            System.out.println("That's not even a number!");
            e.printStackTrace();

        }
        scanner.close();

    }
}
