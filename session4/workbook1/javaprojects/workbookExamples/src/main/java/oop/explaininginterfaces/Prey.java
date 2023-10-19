package oop.explaininginterfaces;

public interface Prey {
    void run();
    void hide();

    default void beingTasty() {
        System.out.println("I look tasty");
    }

    private void doStuff() {
        System.out.println("bla");
    }

    static void iDontLikeThisJavaFeature() {
        System.out.println("bla");
    }
}
