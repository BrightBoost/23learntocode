package collectionframeworkexplanation;

import java.util.ArrayList;

public class ExampleList {
    public static void main(String[] args) {
        String[] names = {"Bobby", "Max", "Jacky", "Charly"};
        // create empty list
        ArrayList<String> namesList = new ArrayList<>();

        // populate list
        for(String name: names) {
            namesList.add(name);
        }
        System.out.println(namesList);
        namesList.remove(namesList.size() - 1);
//        namesList.remove("Charly");
        namesList.contains("Max");
    }
}
