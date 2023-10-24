package utils;

public class LambdaExample {
    public static void main(String[] args) {
        Calculator c1 = (a, b) -> a + b;
        // public double calc(double a, double b) {
        //   return a + b;
        // }
        Calculator c2 = (w, e) -> w * e;

        System.out.println(c1.calc(4, 5));
        System.out.println(c2.calc(4, 5));

    }
}
