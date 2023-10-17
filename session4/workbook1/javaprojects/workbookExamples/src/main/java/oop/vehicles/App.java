package oop.vehicles;

public class App {
    public static void main(String[] args) {
        Vehicle v = new Bicycle();
        v.start();
      //  v = new Boat();
        // i can call ring if I cast to a bicycle
        ((Bicycle) v).ring();
        // two steps version
        Bicycle b = (Bicycle) v;
        b.ring();
    }
}
