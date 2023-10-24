package recap;

import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        // create a few primitives
        char c = 'h';
        int x = 4;
        byte b = 20;
        boolean bool = true;
        long l = 32;
        double d = 4.5;
        float f = 4.5f;
        short s = 45;

        // create a string
        String str1 = "Hi!";

        // string comparison
        String str2 = "Bla";
        str1.equalsIgnoreCase(str2);

        // arrays
        String[] strArray = {"Great", "job", "guys"};
        String strArray2[] = {"Great", "job", "guys"};
        int[] ints = {3, 4, 5};
        char[] chars = {'a', 'b'};

        // enhanced for loop (for each loop)
        for(int i : ints) {
            System.out.println(i);
        }

        // arraylist
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("lala");
        System.out.println(arrayList.get(0));

    }
}
