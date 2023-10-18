package oop.explaininginterfaces;

public class Rabbit extends Animal implements Prey {
    public void beingCute() {
        System.out.println("Look at my cute tail");
    }

    public void run() {
        System.out.println("hopping away");
    }

    public void hide() {
        System.out.println("Down the rabbit hole");
    }
}
