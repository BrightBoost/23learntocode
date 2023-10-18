package oop.explaininginterfaces;

public class Lion extends Animal implements Predator {
    public void rawr() {
        System.out.println("RAWR");
    }

    public void catchAndEat(Prey p) {
        System.out.println("Eating " + p.getClass().getSimpleName());
    }
}
