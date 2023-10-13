package explainarrays;

import java.util.Arrays;

public class ExampleArrays {
    public static void main(String[] args) {
        String[] names = {"Mandana", "Terria"};
        System.out.println(names.length);
        System.out.println(names[0]);
        String[][] bla, lala, lalala;

        // HOW NOT TO COPY AN ARRAY
        String[] colors = {"pink", "purple", "orange"};
        String[] copy = new String[3];
        // ASSIGN THE REFERENCE OF COLORS TO COPY
        copy = colors;
        // WOOPS CHANGED IT IN TWO PLACES
        copy[1] = "yellow";
        System.out.println(Arrays.toString(colors));
        System.out.println(Arrays.toString(copy));

        // So how should we copy..... (manual way)
        String[] fruits = {"Grapefruit", "orange", "lemon"};
        String[] fruitsCopy = new String[fruits.length];

        for(int i = 0; i < fruits.length; i++) {
            fruitsCopy[i] = fruits[i];
        }

        fruitsCopy[1] = "banana";
        System.out.println(Arrays.toString(fruits));
        System.out.println(Arrays.toString(fruitsCopy));

        // So how should we copy..... (built in way)
        String[] languages = {"English", "Dutch", "Spanish", "Persian", "Arabic", "Patois", "French"};
        String[] languagesCopy = new String[languages.length];

        System.arraycopy(languages, 0, languagesCopy, 0, 7);

        languagesCopy[1] = "German";
        System.out.println(Arrays.toString(languages));
        System.out.println(Arrays.toString(languagesCopy));

        Arrays.sort(languagesCopy);
        System.out.println(Arrays.toString(languagesCopy));

        // this should only be done on a sorted array
        int indexFound = Arrays.binarySearch(languagesCopy, "Persian");
        System.out.println(indexFound + ": " + languagesCopy[indexFound]);

        // just a few more random array methods
        int[] nr42s = new int[42];
        Arrays.fill(nr42s, 42);
        System.out.println(Arrays.toString(nr42s));

    }
}
