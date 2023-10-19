package oop.explainingenums;

public class Main {
    public static void main(String[] args) {
        Day day = Day.FRIDAY;
        Day day1 = Day.TUESDAY;

        Day value = Day.valueOf("THURSDAY");
        System.out.println(value);

        for(Day d : Day.values()) {
            System.out.println(d);
        }

        String send = ClassWithSendOptions.senders[0];

    }
}
