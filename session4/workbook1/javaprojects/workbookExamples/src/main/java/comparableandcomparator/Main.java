package comparableandcomparator;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Integer[] ints = {1, 2, 334, 6, 3};
        Arrays.sort(ints);
        System.out.println(Arrays.toString(ints));

        Person[] people = {new Person("Scott", 25),
                new Person("Krista", 24),
                new Person("Joe G", 10)
        };

        Arrays.sort(people, (p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()));
        System.out.println(Arrays.toString(people));

    }
}
