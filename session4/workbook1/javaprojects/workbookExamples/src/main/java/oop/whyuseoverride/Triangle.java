package oop.whyuseoverride;

public class Triangle extends Shape {
    private double side1length;
    private double side2length;
    private double side3length;

    public Triangle(double side1length, double side2length, double side3length) {
        this.side1length = side1length;
        this.side2length = side2length;
        this.side3length = side3length;
    }

    public double getSide1length() {
        return side1length;
    }

    public void setSide1length(double side1length) {
        this.side1length = side1length;
    }

    public double getSide2length() {
        return side2length;
    }

    public void setSide2length(double side2length) {
        this.side2length = side2length;
    }

    public double getSide3length() {
        return side3length;
    }

    public void setSide3length(double side3length) {
        this.side3length = side3length;
    }

    public double calcCircumference() {
       return side1length + side2length + side3length;
    }
}
