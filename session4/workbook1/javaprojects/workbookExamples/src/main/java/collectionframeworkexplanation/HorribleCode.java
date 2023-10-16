package collectionframeworkexplanation;

import javax.swing.plaf.SliderUI;
import java.util.ArrayList;
import java.util.HashMap;

public class HorribleCode {
    public static void main(String[] args) {
        ArrayList<HashMap<ArrayList<String>, Integer>> arrayList = new ArrayList<>();

        // two arraylists of type string
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("Blabla");
        ArrayList<String> list2 = new ArrayList<>();
        list2.add("Lala");

        HashMap<ArrayList<String>, Integer> map = new HashMap<>();
        // add kv pairs to map
        map.put(list1, 34);
        map.put(list2, 323);

        System.out.println(map.get(list2));

        arrayList.add(map);

    }
}
