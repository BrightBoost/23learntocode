package lambdaexplanation;

public class Tool implements Calculator {
    @Override
    public double calc(double x, double y) {
        return x + y;
    }
}
