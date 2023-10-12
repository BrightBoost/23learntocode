public class StaticStuff {
    private String name = "something";
    public static void main(String[] args) {
        System.out.println("blabla");
        StaticStuff staticStuff = new StaticStuff();
        staticStuff.name = "Anything";
    }
}
