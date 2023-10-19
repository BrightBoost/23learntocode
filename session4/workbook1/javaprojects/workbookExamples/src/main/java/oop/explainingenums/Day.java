package oop.explainingenums;

public enum Day {
    SUNDAY(0), MONDAY(1), TUESDAY(2), WEDNESDAY(3), THURSDAY(4), FRIDAY(5), SATURDAY(6);

    private int i;
    Day(int i) {
        System.out.println("Creating enum with i:" + i);
        this.i = i;
    }

    public int getI() {
        return i;
    }

    public void setI(int i) {
        this.i = i;
    }

    public static void main(String[] args) {
        System.out.println("No way! Yes you can run enums"); // but please dont
    }
}
