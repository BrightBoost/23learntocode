package recap;

public abstract class Animal {
    private String sound;

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public void makeSound() {
        System.out.println(this.sound);
    }

    public abstract void eat();
}
