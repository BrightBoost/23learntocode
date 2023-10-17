package oop;

import oop.sub.another.Example;

public class MainApp {
    public static void main(String[] args) {
        Class class1 = new Class("Maaike", "Hartcode", new String[]{"Paul"});
        class1.teachClass("Java OOP");
        class1.teachClass("Java OOP", 9);

        Example example = new Example();
        example.doSomething();
    }
}
