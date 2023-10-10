import java.util.Scanner;

public class InputExamples {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Who are you?");
        String name = scanner.nextLine();
        System.out.println("Hi " + name);
        System.out.println("How old are you?");
        int age = scanner.nextInt();
        scanner.nextLine();
        System.out.println(age + "? That's old!");
        int favoriteNr = scanner.nextInt();
        scanner.nextLine();
        System.out.println("What's your favorite math operator?");
        String operator = scanner.nextLine();
        System.out.println("I love " + operator + " too!");
    }
}