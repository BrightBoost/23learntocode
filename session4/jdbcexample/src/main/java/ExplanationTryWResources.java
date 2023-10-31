public class ExplanationTryWResources {
    public static void main(String[] args) {
        try(Window window = new Window()) {
            System.out.println("blabla");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
