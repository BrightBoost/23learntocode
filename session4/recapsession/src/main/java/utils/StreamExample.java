package utils;

import models.Animal;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        // consists of a bunch of built in functional interfaces
        Predicate<String> p1 = s -> s.length() > 5;
        String s1 = "Some text";
        System.out.println(p1.test(s1));

        // consists of stream methods: source, intermediate, terminal
        List<Integer> numbers = Arrays.asList(12, 12, 13, 131, 34, 6, 8, 989, 9, 87);

        // source operation stream
        // terminal operation foreach
        numbers.stream().forEach(s -> System.out.println(s));

        // write to file
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
            numbers.stream().forEach(nr -> {
                try {
                    bw.write(String.valueOf(nr) + "\n");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            bw.close();
        } catch(IOException ioException) {
            ioException.printStackTrace();
        }

        ArrayList<Animal> animals = new ArrayList<Animal>();
        animals.add(new Animal("Bobby", "Woof"));
        animals.add(new Animal("Walnut", "Sniff"));

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("outputAnimals.txt"));

            animals.stream().forEach(a -> {
                try {
                    bw.write(a.toString());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            bw.close();

        } catch(IOException e) {
            e.printStackTrace();
        }

        System.out.println("***** FILTER *****");


        // intermediate operation filter
        numbers.stream().distinct().filter(i -> i % 2 == 0).forEach(i -> System.out.println(i));

        System.out.println("***** MAP *****");
        // intermediate operation map
        numbers.stream().filter(i -> i > 50).map(i -> i + 10).forEach(i -> System.out.println(i));

        System.out.println("***** SKIP *****");
        numbers.stream().skip(4).forEach(i -> System.out.println(i));


        System.out.println("***** LIMIT *****");
        numbers.stream().limit(4).forEach(i -> System.out.println(i));

        System.out.println("***** COLLECT *****");
        List<Integer> listInts = numbers
                .stream()
                .limit(4)
                .collect(Collectors.toList());
        System.out.println(listInts);


    }


}
