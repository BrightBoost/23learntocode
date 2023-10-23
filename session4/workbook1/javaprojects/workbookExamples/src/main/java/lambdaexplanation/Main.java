package lambdaexplanation;

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator() {
            @Override
            public double calc(double a, double b) {
                return a * b;
            }
        };

        // lambda expression
        Calculator c2 = (x, y) -> x - y;
        System.out.println(c2.calc(5, 3));

        System.out.println(c.calc(5, 5));

        Calculator c1 = new Tool();
        System.out.println(c1.calc(5, 5));

        Printer p = s -> System.out.println(s);
        ExamplePrinter examplePrinter = new ExamplePrinter();

    }
}
