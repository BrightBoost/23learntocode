package inputoutput;

import java.io.*;
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

        try {
            // create filewriter with a true second arg for the constructor to trigger append mode
            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("example1.txt", true));
            bufferedWriter.append("blablabla\n");
            bufferedWriter.append("lalala");
            bufferedWriter.close();
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
}
