package recap;

public class Rabbit extends Animal{
    private String name;

    public Rabbit(String name) {
        super();
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void hop() {
        System.out.println(this.name + "hopping");
    }

    // overloading
    public void hop(int nrOfHops) {
        for(int i = 0; i < nrOfHops; i++) {
            System.out.println("Hop");
        }
    }

    @Override
    public void makeSound() {
        System.out.println("Rabbit sniff");
    }

    @Override
    public void eat() {
        System.out.println("Rabbit eating");
    }
}
