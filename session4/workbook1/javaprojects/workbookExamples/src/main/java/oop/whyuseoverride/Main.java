package oop.whyuseoverride;

import org.w3c.dom.ls.LSOutput;

public class Main {
    public static void main(String[] args) {
        Shape shape = new FourSidedShape(2, 2, 2, 2);
        System.out.println(shape.calcCircumference());

    }


}
