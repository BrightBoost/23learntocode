public class Variables {
    public static void main(String[] args) {
        System.out.println(getValue());
    }

    // this is yikes
    public static Object getValue() {
        if(Math.random() > 0.5) {
            return 4;
        } else {
            return "blabla";
        }
    }
}
