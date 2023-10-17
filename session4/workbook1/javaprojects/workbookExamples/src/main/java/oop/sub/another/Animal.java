package oop.sub.another;

public class Animal {
    private String name;
    protected boolean cute;

    public Animal() {

    }
    public Animal(String name, boolean cute) {
        this.name = name;
        this.cute = cute;
    }

    public void makeSound() {
        System.out.println("animal says animal stuff");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCute() {
        return cute;
    }

    public void setCute(boolean cute) {
        this.cute = cute;
    }
}
