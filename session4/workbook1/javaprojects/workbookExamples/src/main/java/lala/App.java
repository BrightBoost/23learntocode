package lala;

import java.util.Arrays;

public class App {
    Person p;
    int x;
    public static void main(String[] args) {
        Person p = new Person("Bobbie", 2);
        Person p1 = new Person("Max", 13);

        App a = new App();
        System.out.println(a.x);

        String[] arr = {"bla", "blabla"};
        Person[] arrPersons = {p, p1};
        // pretty version
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(arrPersons));


    }
}
