package inputoutput;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExamplesIO {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("example.txt");
            Scanner scanner = new Scanner(fis);
            String input;
            while(scanner.hasNextLine()) {
                input = scanner.nextLine();
                System.out.println(input);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
