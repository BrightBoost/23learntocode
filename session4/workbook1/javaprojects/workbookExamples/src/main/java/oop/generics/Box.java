package oop.generics;

import java.util.ArrayList;

public class Box<T> {
    ArrayList<T> boxContent;

    public ArrayList<T> getBoxContent() {
        return boxContent;
    }

    public void setBoxContent(ArrayList<T> boxContent) {
        this.boxContent = boxContent;
    }
}
