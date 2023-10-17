package oop.sub.another;

import java.util.ArrayList;

public class Example {
    public void doSomething() {
        System.out.println("example blabla");
    }

    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();
        Cow cow = new Cow();
        Dog dog = new Dog();
        Labradoodle labradoodle = new Labradoodle();

        animals.add(cow);
        animals.add(dog);
        animals.add(labradoodle);

        // we can cast the list element to a dog
        ((Dog) animals.get(1)).bark();

        // this will check the method availability on Animal during compile time
        // but execute the one on do during runtime since it's overridden
        animals.get(1).makeSound();

        // make all the objects that are dog bark
        for(Animal a : animals) {
            if(a instanceof Dog){
                ((Dog) a).bark();
            } else {
                System.out.println("I cant bark :( says " + a.getClass().getSimpleName());
            }
        }
    }
}
