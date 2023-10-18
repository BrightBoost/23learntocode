package oop.explaininginterfaces;

public class Fox extends Animal implements Prey, Predator {
    public void beMajestical() {
        System.out.println("Look at me");
    }

    public void catchAndEat(Prey p) {
        System.out.println("Fox is eating " + p.getClass().getSimpleName());
    }

    public void run() {
        System.out.println("gracefully running away");
    }

    public void hide() {
        System.out.println("Down the fox hole");
    }
}
