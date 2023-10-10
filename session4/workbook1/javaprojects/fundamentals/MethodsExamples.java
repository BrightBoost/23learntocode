public class MethodsExamples {
    public static void main(String[] args) {
        double result = addTwoNumbers(4.5, 2.32);
        System.out.println(result);
        printSomething("blabla");
    }

    public static void printSomething(String something) {
        System.out.println(something);
    }

    public static double addTwoNumbers(double nr1, double nr2) {
        return nr1 + nr2;
    }
}
