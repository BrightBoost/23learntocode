package oop.generics;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Box<String> box = new Box<>();
        ArrayList<String> list = new ArrayList<>();
        list.add("coffee");

        box.setBoxContent(list);
    }
}
