package lambdaexplanation;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CoolExamples {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Ron");
        names.add("Greg");
        names.add("Johnoy");
        names.add("Gabriela");
        names.add("Bo");

        names.stream().filter(s -> s.length() > 4).forEach(s -> System.out.println(s));
        // woops this is a java 17 feature
        List<String> filteredNames = names.stream().filter(s -> s.startsWith("G")).toList();

        // here's the "old" version of doing
        List<String> filteredNames2 = names.stream().filter(s -> s.startsWith("G")).collect(Collectors.toList());
        System.out.println(filteredNames);
        names.stream().map(s -> s.length()).forEach(i -> System.out.println(i));
        names.stream()
                .filter(s -> s.length() > 2)
                .map(s -> s.charAt(0) + "" + (s.length() - 2) + s.charAt(s.length() - 1))
                .forEach(i -> System.out.println(i));

        String result = names.stream().collect(Collectors.joining(" - "));
        System.out.println(result);
        System.out.println("******");

        // intermediate operations: skip and limit
        names.stream().skip(1).forEach(s -> System.out.println(s));
        names.stream().limit(1).forEach(s -> System.out.println(s));

        // match terminal operators
        boolean b1 = names.stream().allMatch(s -> s.length() > 2);
        System.out.println("all match:" + b1);

        boolean b2 = names.stream().noneMatch(s -> s.length() > 2);
        System.out.println("none match:" + b2);

        boolean b3 = names.stream().anyMatch(s -> s.length() > 2);
        System.out.println("any match:" + b3);

//        names.clear();
        // find terminal operators
        String any = names.stream().findAny().orElse("no value");
        String any2 = names.stream().filter(s -> s.startsWith("G")).findAny().orElse("no value");
        System.out.println("find any:" + any2);

        Stream.iterate(0, i -> i + 1).limit(100).filter(x -> isPrime(x)).forEach(s -> System.out.println(s));
    }

    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if ((num % i) == 0)
                return false;
        }
        return true;
    }
}

