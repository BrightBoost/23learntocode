package funwithexceptions;

public class ExceptionExamples {
    public static void main(String[] args) {
        try {
            doSomethingDangerous();
            System.out.println("Lalala");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public static void doSomethingDangerous() throws Exception {
        throw new Exception("I told you this was dangerous!");
    }

    public static void doSomethingElseThatsDangerousToo() {
        throw new RuntimeException();
    }
}
