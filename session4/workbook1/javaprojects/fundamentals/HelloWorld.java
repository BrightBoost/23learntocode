public class HelloWorld {
    public static void main(String[] args) {
        for (double i = 0; i < 100; i++) {
            i = i + 0.01;
            System.out.println(i);
        }

        int x = 3;
        x = 5;
        long nr = 12345678900L;
        float g = 10.0f;

        long creditCard = 5200_7500_6500_0001L;

        int myInt = 9;
        long myLong;

        float myFloat = 3.8f;
        double myDouble;

        // an int fits in a long
        myLong = myInt;
        // a float fits in a double
        myDouble = myFloat;
        // you can even put an int or long into a float or double
        myFloat = creditCard;
        System.out.println(myFloat);
        myDouble = myLong;

        double dValue = 3.2;
        long iValue = (long)dValue;

    }

}