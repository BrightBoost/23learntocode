package oop.whyuseoverride;

import java.util.ArrayList;

public class FourSidedShape extends Shape {
    private double side1length;
    private double side2length;
    private double side3length;
    private double side4length;

    public FourSidedShape(double side1length, double side2length, double side3length, double side4length) {
        this.side1length = side1length;
        this.side2length = side2length;
        this.side3length = side3length;
        this.side4length = side4length;
    }

    @Override
    public double calcCircumference() {
        return side1length + side2length + side3length + side4length;
    }

    public double calcCircumference(boolean blabla) {
        return side1length + side2length + side3length + side4length;
    }
}
